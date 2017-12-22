import React from 'react'

import { connect } from 'react-redux'
import { updatePageContent } from '../redux/actions'
import InnerContentContainer from '../containers/InnerContentContainer';
import EditableInnerContentContainer from '../containers/EditableInnerContentContainer';


const styles = {
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const mapStateToProps = (state) => {
  return {
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

const CallToActionContainer = (props) => {
  return (
    <section className={`call-to-action ${props.classes}`}>
      <div style={styles.container} className='container col-xs-12 col-sm-8'>
        {
          props.isEditingPage ?
          <EditableInnerContentContainer content={props.content} onUpdate={props.onUpdatePageContent} /> :
          <InnerContentContainer content={props.content} />
        }
      </div>
    </section>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CallToActionContainer);