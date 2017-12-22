import React from 'react';
import { connect } from 'react-redux'
import { updatePageTitle } from '../redux/actions'
import EditableTitleWithHolder from '../components/editable/TitleWithHolder'
import DisplayTitleWithHolder from '../components/display/TitleWithHolder'
import { Jumbotron } from 'reactstrap';

function mapStateToProps(state) {
  return {
    title: state.pageData.title,
    isEditingPage: state.adminTools.isEditingPage,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onUpdateTitle: (title) => {
      dispatch(updatePageTitle(title))
    }
  }
}

const styles = {
  jumbotron: {
    display: 'flex',
    background: 'url(https://www.savethechildren.org.uk/content/dam/global/images/countries/syria/rescue-at-sea-vos-sc127177-orig.jpg.thumbimage.1536.1536.jpg) no-repeat center center',
    backgroundSize: 'cover',
    height: '60vh',
    minHeight: '440px',
    alignItems: 'center'
  }
}

const PageHeaderContainer = (props) => {

  return (
    <Jumbotron style={styles.jumbotron}>
      {
        props.isEditingPage ?
        <EditableTitleWithHolder text={props.title} updateTitle={props.onUpdateTitle} /> :
        <DisplayTitleWithHolder text={props.title} />
      }
    </Jumbotron>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PageHeaderContainer)
