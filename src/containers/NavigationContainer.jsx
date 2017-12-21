import { connect } from 'react-redux'
import { logIn, logOut } from '../state/actions'
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
    }
  }
}

const NavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)

export default NavigationContainer