import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import logo from '../assets/img/STC_Logo_Horiz.png';
import {
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
  logo: {
    width: '200px',
    marginBottom: '0'
  },
  navbarTitle: {
    width: '100%',
    textAlign: 'center',
    fontSize: '1.4rem'
  }
}

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
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
                <DropdownMenu >
                  <DropdownItem>
                    <Link className='nav-link' to="/about/toolkit">About This Toolkit</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link className='nav-link' to="/about/child-sensitivity">About Child Sensitivity</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link className='nav-link' to="/about/save-the-children">About Save the Children</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link className='nav-link' to="/">Edit page</Link>
              </NavItem>
              <NavItem>
                <Link className='nav-link' to="/">Log out</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}