import { connect } from 'react-redux'
import { logIn, logOut, doAuthentication } from '../redux/actions'
import Navigation from '../components/Navigation'

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogIn: () => {
      dispatch(logIn())
    },
    onLogOut: () => {
      dispatch(logOut())
    },
    listenForAuthentication: () => {
      dispatch(doAuthentication())
    }
  }
}

const NavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)

export default NavigationContainer