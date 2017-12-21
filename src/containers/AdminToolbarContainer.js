import { connect } from 'react-redux'
import { toggleEditing, savePage } from '../state/actions'
import AdminToolbar from '../components/AdminToolbar'

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    isEditingPage: state.isEditingPage
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