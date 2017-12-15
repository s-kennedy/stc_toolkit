import React from 'react'
import { Button } from 'reactstrap';

const styles = {
  header: {
    display: 'flex'
  }
}

class Header extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = { editing: false, text: this.props.text }
    this.toggleEditing = () => this._toggleEditing()
    this.handleEditorChange = (event) => this._handleEditorChange(event)
    this.doneEditing = () => this._doneEditing();
  }

  _toggleEditing() {
    this.setState({ editing: !this.state.editing })
  }

  _handleEditorChange (event) {
    const text = event.currentTarget.value;
    this.setState({ text });
  };

  _doneEditing() {
    this.toggleEditing();
    this.props.updateContent(this.props.index, { text: this.state.text })
  }

  render() {
    const { text } = this.state;

    if (this.state.editing) {
      return (
        <div className='header' style={styles.header}>
          <div className="edit-container">
            <h3>
              <input
                value={ text }
                onChange={this.handleEditorChange}
              />
            </h3>
            <div className="edit-action">
              <Button onClick={this.doneEditing}>Done</Button>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className='header'>
        <div className="edit-container">
          <h3>{ text }</h3>
          <div className="edit-action">
            <Button onClick={this.toggleEditing}>Edit</Button>
          </div>
        </div>
      </div>
    )
  }
};

export default Header;