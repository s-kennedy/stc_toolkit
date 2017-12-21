import { connect } from 'react-redux'
import { updatePageTitle } from '../state/actions'

import PageHeader from '../components/PageHeader'

function mapStateToProps(state) {
  return {
    title: state.pageData.title,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onUpdateTitle: (title) => {
      dispatch(updatePageTitle(title))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader)
