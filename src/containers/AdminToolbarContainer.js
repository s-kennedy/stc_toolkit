import { connect } from 'react-redux'
import { toggleEditing, savePage } from '../redux/actions'
import AdminToolbar from '../components/AdminToolbar'

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.isLoggedIn,
    isEditingPage: state.isEditingPage,
    content: state.content,
    pageData: state.pageData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleEditing: () => {
      dispatch(toggleEditing())
    },
    onSavePage: (content) => {
      dispatch(savePage(content))
    }
  }
}

const AdminToolbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminToolbar)

export default AdminToolbarContainer;