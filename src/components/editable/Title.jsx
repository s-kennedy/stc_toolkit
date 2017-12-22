import React from 'react'
import { Button } from 'reactstrap';
import Editable from './Editable';
import DisplayTitle from '../display/Title';
import PlainTextEditor from '../editingTools/PlainTextEditor'


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
    this.state = { editing: false }
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
    if (this.state.editing) {
      return (
        <div className='title-container' style={styles.titleContainer}>
          <h2>
            <PlainTextEditor text={this.props.text} doneEditing={this.doneEditing} />
          </h2>
        </div>
      )
    }

    return (
      <Editable toggleEditing={this.toggleEditing}>
        <DisplayTitle text={this.props.text} />
      </Editable>
    )
  }
};

export default Title;