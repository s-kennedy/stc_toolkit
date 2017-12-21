import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem } from 'reactstrap';

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


export default class AdminToolbar extends React.Component {
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

    if (this.props.isLoggedIn) {
      const editingText = this.props.isEditingPage ? 'Cancel' : 'Edit this page';
      return (
        <div>
          <Navbar style={styles.toolbar} expand="md">
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button color='white' onClick={this.props.onToggleEditing}>{editingText}</Button>
                </NavItem>
                <NavItem>
                  { this.props.isEditingPage && <Button style={styles.saveBtn} onClick={this.props.saveChanges}>Save changes</Button> }
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    } else {
      return <div></div>
    }
  }
}