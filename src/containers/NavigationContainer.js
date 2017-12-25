import { connect } from 'react-redux'
import { userLoggedIn, userLoggedOut } from '../redux/actions'
import Navigation from '../components/Navigation'

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.adminTools.isLoggedIn,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLoggedIn: () => {
      dispatch(userLoggedIn())
    },
    userLoggedOut: () => {
      dispatch(userLoggedOut())
    },
    // checkPreviousAuthentication: () => {
    //   dispatch(checkAuthentication())
    // }
  }
}

const NavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)

export default NavigationContainer