import React from 'react';
import PropTypes from 'prop-types';
import { filter } from 'lodash'
import Link from 'gatsby-link';
import logo from '../assets/img/STC_Logo_Horiz.png';
import { logIn, logOut, doAuthentication } from '../redux/actions'
import AuthService from '../utils/NewAuthService'

import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

const styles = {
  navbar: {
    boxShadow: '0px 2px 4px rgba(0,0,0,0.1)'
  },
  logo: {
    width: '200px',
    marginBottom: '0'
  }
}

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
    this.props.checkPreviousAuthentication()
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  login() {
    if (!this.auth) {
      this.auth = new AuthService(process.env.AUTH0_CLIENT_ID, process.env.AUTH0_DOMAIN);
      this.lock = this.auth.getLock();
      this.lock.on('authenticated', () => {
        this.props.userLoggedIn()
      });
    }
    this.auth.login();
  }

  logout() {
    this.auth.logout();
    this.props.userLoggedOut();
  }

  renderSignInUp = () => {
    return <Button color="secondary" onClick={this.login.bind(this)}>Sign In / Sign Up</Button>
  }

  renderLogOut = () => {
    return <Button color="secondary" onClick={this.logout.bind(this)}>Sign out</Button>
  }

  render() {
    const aboutPages = filter(this.props.data, (page) => ( page.node.fields.category === 'about' ));
    const referencePages = filter(this.props.data, (page) => ( page.node.fields.category === 'reference' ));

    const loginButton = this.state.loggedIn ? <div>HELLO</div> : <button onClick={this.login.bind(this)}>Login</button>;

    return (
      <div>
        <Navbar color="faded" light expand="md" style={styles.navbar}>
          <NavbarBrand href="/">
            <img style={styles.logo} src={logo} alt='Save the Children' />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              <UncontrolledDropdown nav>
                <DropdownToggle nav caret>
                  About
                </DropdownToggle>
                <DropdownMenu>
                  {
                    aboutPages.map((page, index) => (
                      <DropdownItem key={index}>
                        <Link className='nav-link' to={page.node.fields.slug}>{page.node.fields.title}</Link>
                      </DropdownItem>
                    ))
                  }
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav>
                <DropdownToggle nav caret>
                  Reference
                </DropdownToggle>
                <DropdownMenu>
                  {
                    referencePages.map((page, index) => (
                      <DropdownItem key={index}>
                        <Link className='nav-link' to={page.node.fields.slug}>{page.node.fields.title}</Link>
                      </DropdownItem>
                    ))
                  }
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                { this.props.isLoggedIn ?  this.renderLogOut() : this.renderSignInUp() }
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
