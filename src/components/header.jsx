import React from 'react'
import { withStyles } from 'material-ui/styles';
import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw, convertFromRaw, EditorState, ContentState, convertFromHTML } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { RIEInput } from 'riek'
import { isString } from 'lodash'

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

    const content = draftToHtml(this.props.text);

    return (
      <div className={this.props.classes.header} onClick={this.toggleEditing}>
        { text }
      </div>
    )
  }
};

export default withStyles(styles)(Header);