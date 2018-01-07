import React from 'react'

import DisplayAction from '../display/Action'
import Editable from './Editable'
import PlainTextEditor from '../editingTools/PlainTextEditor'

class Action extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = { editing: false }
    this.toggleEditing = () => this._toggleEditing()
    this.doneEditing = (text) => this._doneEditing(text);
  }

  _toggleEditing() {
    this.setState({ editing: !this.state.editing })
  }

  _doneEditing(text) {
    this.toggleEditing();
    this.props.updateContent(this.props.sectionIndex, this.props.index, { text })
  }

  render() {
    if (this.state.editing) {
      return (
        <PlainTextEditor doneEditing={this.doneEditing} text={this.props.text} />
      )
    }

    return (
      <Editable toggleEditing={this.toggleEditing} {...this.props}>
        <DisplayAction text={this.props.text} />
      </Editable>
    )
  }
};

export default Action;