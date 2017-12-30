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
    userLoggedIn: (roles) => {
      dispatch(userLoggedIn(roles))
    },
    userLoggedOut: () => {
      dispatch(userLoggedOut())
    }
  }
}

const NavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)

export default NavigationContainer