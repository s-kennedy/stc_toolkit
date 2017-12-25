import React from 'react';
import PropTypes from 'prop-types';
import { filter } from 'lodash'
import Link from 'gatsby-link';
import logo from '../assets/img/STC_Logo_Horiz.png';
import { logIn, logOut, doAuthentication } from '../redux/actions'
// import AuthService from '../utils/NewAuthService'

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
      isOpen: false,
      loggedIn: false
    };
    // this.props.checkPreviousAuthentication()
    // this.props.listenForAuthentication()
  }

  componentDidMount() {
    debugger;
    const AuthService = require('../utils/NewAuthService');
    this.auth = new AuthService('hvh4kk59W4FnQ5YuHOX3enr2JqvfnYM2', 'cstoolkit.eu.auth0.com');
    this.setState({ loggedIn: this.auth.loggedIn() });
    this.auth.callback = () => {
      this.setState({ loggedIn: this.auth.loggedIn() });
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  login() {
    this.auth.login();
  }

  renderSignInUp = () => {
    return <Button color="secondary" onClick={this.login.bind(this)}>Sign In / Sign Up</Button>
  }

  renderLogOut = () => {
    return <Button color="secondary" >Sign out</Button>
  }

  render() {
    const aboutPages = filter(this.props.data, (page) => ( page.node.fields.category === 'about' ));
    const referencePages = filter(this.props.data, (page) => ( page.node.fields.category === 'reference' ));

    return (
      <div>
        <script src="https://cdn.auth0.com/js/auth0/8.12.1/auth0.min.js"></script>
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
                { this.state.loggedIn ? this.renderLogOut() : this.renderSignInUp() }
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
