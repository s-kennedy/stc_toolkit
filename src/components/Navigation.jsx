import React from 'react';
import PropTypes from 'prop-types';
import { filter } from 'lodash'
import Link from 'gatsby-link';
import logo from '../assets/img/STC_Logo_Horiz.png';
import AuthService from '../utils/AuthService'
import { lock } from '../utils/init'

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
    this.login = () => this._login()
    this.logout = () => this._logout()
    this.initializeLock = () => this._initializeLock()
    this.checkPreviousAuthentication = () => this._checkPreviousAuthentication();
    this.auth = new AuthService();
  }

  componentDidMount() {
    this.initializeLock()
    this.checkPreviousAuthentication()
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  _login() {
    this.lock.show()
  }

  _checkPreviousAuthentication() {
    const token = this.auth.getToken()
    if (!!token) {
      const roles = this.auth.rolesFromToken()
      this.props.userLoggedIn(roles);
    }
  }

  _initializeLock() {
    try {
      this.lock = new Auth0Lock(process.env.AUTH0_CLIENT_ID, process.env.AUTH0_DOMAIN, {
        oidcConformant: true,
        auth: {
          redirectUrl: window.location.href,
          responseType: 'token',
          audience: 'stc_toolkit_api',
          params: {
            scope: 'openid email'
          }
        },
        theme: {
          logo: logo,
          primaryColor: '#DA201C' // red
        },
        languageDictionary: {
          title: "Save the Children Child Sensitivity Toolkit"
        }
      })
      this.lock.on('authenticated', (authResult) => {
        this.auth.setToken(authResult.accessToken);
        const roles = this.auth.rolesFromToken()
        this.props.userLoggedIn(roles);
      })
    } catch(e) {
      setTimeout(() => { this.initializeLock() }, 100)
    }
  }


  _logout() {
    this.auth.logout();
    this.props.userLoggedOut();
  }

  renderSignInUp = () => {
    return <Button color="secondary" onClick={this.login}>Sign In / Sign Up</Button>
  }

  renderLogOut = () => {
    return <Button color="secondary" onClick={this.logout}>Sign out</Button>
  }

  render() {
    const aboutPages = filter(this.props.data, (page) => ( page.node.fields.category === 'about' ));
    const referencePages = filter(this.props.data, (page) => ( page.node.fields.category === 'reference' ));

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
                        <Link className='nav-link' to={`/${page.node.fields.slug}`}>{page.node.fields.title}</Link>
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
                        <Link className='nav-link' to={`/${page.node.fields.slug}`}>{page.node.fields.title}</Link>
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
