import React from 'react'
import { Button } from 'reactstrap';
import Editable from './Editable';
import DisplayTitleWithHolder from '../display/TitleWithHolder';
import PlainTextEditor from '../editingTools/PlainTextEditor'

const styles = {
  title: {
    margin: 0
  },
  headlineHolder: {
    backgroundColor: '#FFFFFF',
    padding: '2px 20px',
    borderRadius: '8px'
  }
}

class TitleWithHolder extends React.Component {
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
    this.props.updateTitle(this.state.text)
  }

  render() {
    if (this.state.editing) {
      return (
        <div className='display-title edit-container'>
          <h1 className="display-3">
            <PlainTextEditor text={this.props.text} doneEditing={this.doneEditing} />
          </h1>
        </div>
      )
    }

    return (
      <Editable toggleEditing={this.toggleEditing}>
        <DisplayTitleWithHolder text={this.props.text} />
      </Editable>
    )
  }
};

export default TitleWithHolder;