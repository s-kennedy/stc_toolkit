import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
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
  toolbar: {
    backgroundColor: '#9A3324',
    color: '#FFF'
  },
  saveBtn: {
    backgroundColor: '#009CA6',
    color: '#FFF'
  }
}


export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggleEditing = this.toggleEditing.bind(this);
    this.state = {
      isOpen: false,
      editing: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleEditing() {
    this.setState({
      editing: !this.state.editing
    });
  }


  render() {
    const editingText = this.state.editing ? 'Cancel' : 'Edit this page';

    return (
      <div>
        <Navbar style={styles.toolbar} expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button color='white' onClick={this.toggleEditing}>{editingText}</Button>
              </NavItem>
              <NavItem>
                { this.state.editing && <Button style={styles.saveBtn} onClick={this.props.saveChanges}>Save changes</Button> }
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}