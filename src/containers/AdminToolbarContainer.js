import { connect } from 'react-redux'
import { toggleEditing, savePage } from '../redux/actions'
import AdminToolbar from '../components/AdminToolbar'

const mapStateToProps = (state, ownProps) => {
  const allowEditing = state.adminTools.userRoles && state.adminTools.userRoles.includes('Editor')
  return {
    isLoggedIn: state.adminTools.isLoggedIn,
    isEditingPage: state.adminTools.isEditingPage,
    content: state.content,
    pageData: state.pageData,
    allowEditing: allowEditing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleEditing: () => {
      dispatch(toggleEditing())
    },
    savePage: (pageData, content, token) => {
      dispatch(savePage(pageData, content, token))
    }
  }
}

const AdminToolbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminToolbar)

export default AdminToolbarContainer;