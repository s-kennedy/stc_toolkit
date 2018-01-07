import React from 'react'

import { connect } from 'react-redux'
import {
  updateSectionContent,
  duplicateSection,
  deleteSection,
  addContentItem,
  deleteContentItem
} from '../redux/actions'
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
    },
    onDelete: (sectionIndex) => {
      dispatch(deleteSection(sectionIndex))
    },
    onAddContentItem: (sectionIndex, contentType) => {
      dispatch(addContentItem(sectionIndex, contentType))
    },
    onDeleteContentItem: (sectionIndex, contentIndex) => {
      dispatch(deleteContentItem(sectionIndex, contentIndex))
    }
  }
}

const SectionContainer = (props) => {
    return (
      <section className={`section ${props.classes}`}>
        <div style={styles.container} className='container col-xs-12 col-sm-12 col-md-8'>
        {
          props.isEditingPage ?
          <EditableInnerContentContainer
            sectionIndex={props.index}
            content={props.content}
            onUpdate={props.onUpdateSectionContent}
            onDelete={props.onDelete}
            onDuplicate={props.onDuplicate}
            onAddContentItem={props.onAddContentItem}
            onDeleteContentItem={props.onDeleteContentItem}
          /> :
          <InnerContentContainer content={props.content} />
        }
        </div>
      </section>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionContainer);