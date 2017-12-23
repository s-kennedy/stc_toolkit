import React from 'react'

import { connect } from 'react-redux'
import { updateSectionContent, duplicateSection } from '../redux/actions'
import InnerContentContainer from '../containers/InnerContentContainer';
import EditableInnerContentContainer from '../containers/EditableInnerContentContainer';


const styles = {
  container: {
    padding: '3rem',
  }
}

const mapStateToProps = (state) => {
  return {
    isEditingPage: state.adminTools.isEditingPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateSectionContent: (sectionIndex, contentIndex, newContent) => {
      dispatch(updateSectionContent(sectionIndex, contentIndex, newContent))
    },
    onDuplicate: (sectionIndex) => {
      dispatch(duplicateSection(sectionIndex))
    }
  }
}

const ReferenceContainer = (props) => {
    return (
      <section className={`reference ${props.classes}`}>
        <div style={styles.container} className='container col-xs-12 col-sm-8'>
        {
          props.isEditingPage ?
          <EditableInnerContentContainer
            sectionIndex={props.index}
            content={props.content}
            onUpdate={props.onUpdateSectionContent}
            onDuplicate={props.onDuplicate}
          /> :
          <InnerContentContainer content={props.content} />
        }
        </div>
      </section>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(ReferenceContainer);