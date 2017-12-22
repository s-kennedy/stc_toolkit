import React from 'react'
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw, convertFromRaw, EditorState, ContentState } from 'draft-js';
import { Button } from 'reactstrap';
import DisplayParagraph from '../display/Paragraph'
import Editable from './Editable'

import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


class Paragraph extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = { editing: false, text: this.props.text }
    this.toggleEditing = () => this._toggleEditing()
    this.initializeEditorState = () => this._initializeEditorState();
    this.handleEditorStateChange = (state) => this._handleEditorStateChange(state)
    this.doneEditing = () => this._doneEditing();
  }

  componentDidMount() {
    this.initializeEditorState();
  }

  _initializeEditorState() {
    const blocksFromHtml = htmlToDraft(this.props.text);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
    const editorState = EditorState.createWithContent(contentState);

    this.setState({ editorState });
  }

  _toggleEditing() {
    this.setState({ editing: !this.state.editing })
  }

  _handleEditorStateChange(editorState) {
    this.setState({
      editorState,
    });
  };

  _doneEditing() {
    this.toggleEditing();
    const contentToUpdate = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
    this.setState({ text: contentToUpdate })
    this.props.updateContent(this.props.index, { text: contentToUpdate })
  }

  render() {
    if (this.state.editing) {
      const { editorState } = this.state;

      return (
        <div className="para edit-container">
          <Editor editorState={editorState} onEditorStateChange={this.handleEditorStateChange} />
          <div className="edit-action">
            <Button onClick={this.doneEditing}>Done</Button>
          </div>
        </div>
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