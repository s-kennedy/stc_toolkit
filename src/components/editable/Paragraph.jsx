import React from 'react'
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw, convertFromRaw, EditorState, ContentState } from 'draft-js';
import { Button } from 'reactstrap';
import DisplayParagraph from '../display/Paragraph'
import Editable from './Editable'
import RichTextEditor from '../editingTools/RichTextEditor'

import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


class Paragraph extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = { editing: false, text: this.props.text }
    this.toggleEditing = () => this._toggleEditing()
    this.doneEditing = (text) => this._doneEditing(text);
  }

  _toggleEditing() {
    this.setState({ editing: !this.state.editing })
  }

  _doneEditing(text) {
    this.toggleEditing();
    this.setState({ text })
    // this.props.updateContent(this.props.index, { text })
    console.log(text)
  }

  render() {
    if (this.state.editing) {
      const { editorState } = this.state;

      return (
        <RichTextEditor doneEditing={this.doneEditing} text={this.state.text} />
      )
    }

    return (
      <Editable toggleEditing={this.toggleEditing}>
        <DisplayParagraph text={this.state.text} />
      </Editable>
    )
  }
};

export default Paragraph;