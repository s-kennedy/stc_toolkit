import React from 'react';

import { connect } from 'react-redux';
import { updatePageContent } from '../redux/actions';
import InnerContentContainer from '../containers/InnerContentContainer';
import EditableInnerContentContainer from '../containers/EditableInnerContentContainer';

const mapStateToProps = (state) => {
  return {
    content: state.content,
    isEditingPage: state.isEditingPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdatePageContent: (content) => {
      dispatch(updatePageContent(content))
    }
  }
}


const PageContentContainer = (props) => {
    return (
      <div className='home'>
      {
        props.isEditingPage ?
        <EditableInnerContentContainer content={props.content} onUpdate={props.onUpdatePageContent} /> :
        <InnerContentContainer content={props.content} />
      }
      </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(PageContentContainer);