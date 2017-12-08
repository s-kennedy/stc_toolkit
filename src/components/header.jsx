import React from 'react'
import { withStyles } from 'material-ui/styles';
import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw, convertFromRaw, EditorState, ContentState, convertFromHTML } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


const styles = theme => ({
  header: {
    fontFamily: "'Trade Gothic', 'Helvetica', 'sans-serif'",
    fontSize: '3.33rem',
    lineHeight: '2.077rem'
  }
});

class Header extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    const blocksFromHTML = convertFromHTML(this.props.text);
    const contentState = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );
    const editorState = EditorState.createWithContent(contentState);
    this.state = { editing: false, editorState }
    this.toggleEditing = () => this._toggleEditing()
    this.handleEditorStateChange = (state) => this._handleEditorStateChange(state)
    this.doneEditing = () => this._doneEditing();
  }

  _toggleEditing() {
    this.setState({ editing: !this.state.editing })
  }

  _handleEditorStateChange (editorState) {
    this.setState({
      editorState,
    });
  };

  _doneEditing() {
    this.toggleEditing();
    const contentToUpdate = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
    console.log('contentToUpdate', contentToUpdate)
    this.props.updateContent(this.props.index, contentToUpdate)
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

    return (
      <div className={this.props.classes.header} onClick={this.toggleEditing}>
        { this.props.text }
      </div>
    )
  }
};

export default withStyles(styles)(Header);