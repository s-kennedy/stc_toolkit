import React from 'react'

const styles = {
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2rem',
  },
  title: {
    borderBottom: '2px solid #DA291C'
  }
}

class Title extends React.Component {
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
    this.props.updateTitle({ text: this.state.text })
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
      <div className='title-container' style={styles.titleContainer}>
        <div className='title' onClick={this.toggleEditing} style={styles.title}>
          <h2>{ text }</h2>
        </div>
      </div>
    )
  }
};

export default Title;