import React from 'react';
import { connect } from 'react-redux'
import { updatePageTitle } from '../redux/actions'
import EditableTitleWithHolder from '../components/editable/TitleWithHolder'
import DisplayTitleWithHolder from '../components/display/TitleWithHolder'
import { Jumbotron } from 'reactstrap';

import img from '../assets/img/home_header.jpg';

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
    background: `url(${img}) no-repeat center center`,
    backgroundSize: 'cover',
    height: '65vh',
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
