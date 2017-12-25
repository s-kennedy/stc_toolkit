import { connect } from 'react-redux'
import { logIn, logOut, doAuthentication, checkAuthentication } from '../redux/actions'
import Navigation from '../components/Navigation'

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.adminTools.isLoggedIn,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // onLogIn: () => {
    //   dispatch(logIn())
    // },
    // onLogOut: () => {
    //   dispatch(logOut())
    // },
    // listenForAuthentication: () => {
    //   dispatch(doAuthentication())
    // },
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