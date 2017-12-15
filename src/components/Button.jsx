import React from 'react'
import { Button } from 'reactstrap';
import Link from 'gatsby-link';

class STCButton extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = { editing: false, anchor: this.props.anchor, link: this.props.link }
    this.toggleEditing = () => this._toggleEditing()
    this.handleAnchorChange = (event) => this._handleAnchorChange(event)
    this.handleLinkChange = (event) => this._handleLinkChange(event)
    this.doneEditing = () => this._doneEditing();
  }

  _toggleEditing() {
    this.setState({ editing: !this.state.editing })
  }

  _handleAnchorChange (event) {
    const anchor = event.currentTarget.value;
    this.setState({ anchor });
  };

  _handleLinkChange (event) {
    const link = event.currentTarget.value;
    this.setState({ link });
  };

  _doneEditing() {
    this.toggleEditing();
    this.props.updateContent(this.props.index, { anchor: this.state.anchor, link: this.state.link })
  }

  render() {
    const { anchor, link } = this.state;

    if (this.state.editing) {
      return (
        <div>
          <input
            value={ anchor }
            onChange={this.handleAnchorChange}
          />
          <input
            value={ link }
            onChange={this.handleLinkChange}
          />
          <p onClick={this.doneEditing}>done editing</p>
        </div>
      )
    }

    return (
      <Button className="stc-btn">
        <Link to={ link }>{ anchor }</Link>
      </Button>
    )
  }
};

export default STCButton;