import Auth0Lock from 'auth0-lock'
import logo from '../assets/img/STC_Logo_Horiz.png'

export default class AuthService {
  constructor(clientId, domain) {
    // Configure Auth0
    this.lock = new Auth0Lock(clientId, domain, {
      oidcConformant: true,
      auth: {
        redirectUrl: `${window.location.origin}/`,
        responseType: 'token',
        audience: 'stc_toolkit_api',
        params: {
          scope: 'openid email'
        }
      },
      theme: {
        logo: logo,
        primaryColor: '#7FDBFF'
      },
      languageDictionary: {
        title: "Save the Children Child Sensitivity Toolkit"
      }
    })
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', this._doAuthentication.bind(this))
    // binds login functions to keep this context
    this.login = this.login.bind(this)
  }
  _doAuthentication(authResult) {
      // Saves the user token
      this.setToken(authResult.accessToken)
      // navigate to the home route
      location.replace("/");
  }
  login() {
    // Call the show method to display the widget.
    this.lock.show()
  }
  loggedIn() {
    // Checks if there is a saved token and it's still valid
    return !!this.getToken()
  }
  setToken(accessToken) {
    // Saves user token to local storage
    localStorage.setItem('access_token', accessToken)
  }
  getToken() {
    // Retrieves the user token from local storage
    return localStorage.getItem('access_token')
  }
  logout() {
    // Clear user token and profile data from local storage
    localStorage.removeItem('access_token');
    location.replace("/");
  }
}