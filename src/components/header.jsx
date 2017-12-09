import React from 'react'

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
        <div>
          <input
            value={ text }
            onChange={this.handleEditorChange}
          />
          <p onClick={this.doneEditing}>done editing</p>
        </div>
      )
    }

    return (
      <div className={'header'} onClick={this.toggleEditing}>
        <h3>{ text }</h3>
      </div>
    )
  }
};

export default Header;