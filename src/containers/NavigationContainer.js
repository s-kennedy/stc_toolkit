import { connect } from 'react-redux'
import { logIn, logOut, checkAuthentication } from '../redux/actions'
import Navigation from '../components/Navigation'

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.adminTools.isLoggedIn,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (token) => {
      dispatch(logIn(token))
    },
    logOut: () => {
      dispatch(logOut())
    },
    checkPreviousAuthentication: () => {
      dispatch(checkAuthentication())
    }
  }
}

const NavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)

export default NavigationContainer