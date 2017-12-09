import React from 'react'
import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw, convertFromRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


class Paragraph extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    const contentState = convertFromRaw(this.props.text);
    const editorState = EditorState.createWithContent(contentState);

    this.state = { editing: false, editorState }
    this.toggleEditing = () => this._toggleEditing()
    this.handleEditorStateChange = (state) => this._handleEditorStateChange(state)
    this.doneEditing = () => this._doneEditing();
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
    const contentToUpdate = convertToRaw(this.state.editorState.getCurrentContent());
    this.props.updateContent(this.props.index, { text: contentToUpdate })
  }

  render() {
    if (this.state.editing) {
      const { editorState } = this.state;

      return (
        <div>
          <Editor editorState={editorState} onEditorStateChange={this.handleEditorStateChange} />
          <p onClick={this.doneEditing}>done editing</p>
        </div>
      )
    }

    const content = draftToHtml(this.props.text);
    return (
      <div className={'para'} onClick={this.toggleEditing}>
        <div dangerouslySetInnerHTML={ {__html: content} } />
      </div>
    )
  }
};

export default Paragraph;