import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem } from 'reactstrap';

import { savePage } from '../utils/API';
import { auth } from '../utils/init';

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
    this.token = auth.getToken();
    this.savePageToDatabase = () => this._savePageToDatabase();
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  _savePageToDatabase () {
    this.props.savePage(this.props.pageData, this.props.content)
  }

  render() {

    if (this.props.isLoggedIn && this.props.allowEditing) {
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
                  { this.props.isEditingPage && <Button style={styles.saveBtn} onClick={this.savePageToDatabase}>Save changes</Button> }
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