import React from 'react'
import { Button } from 'reactstrap';
import Editable from './Editable';
import DisplayTitle from '../display/Title';


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
        <div className='title-container' style={styles.titleContainer}>
          <div className='title edit-container' style={styles.title}>
            <h2>
              <input
                value={ text }
                onChange={this.handleEditorChange}
              />
            </h2>
            <div className="edit-action">
              <Button onClick={this.doneEditing}>Done</Button>
            </div>
          </div>
        </div>
      )
    }

    return (
      <Editable toggleEditing={this.toggleEditing}>
        <DisplayTitle text={text} />
      </Editable>
    )
  }
};

export default Title;