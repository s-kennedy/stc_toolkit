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
        primaryColor: '#DA201C' // red
      },
      languageDictionary: {
        title: "Save the Children Child Sensitivity Toolkit"
      }
    })
    this.lock.on('authenticated', this._doAuthentication.bind(this))
    this.login = this.login.bind(this)
  }

  _doAuthentication(authResult) {
      this.setToken(authResult.accessToken)
      location.replace("/");
  }

  login() {
    this.lock.show()
  }

  loggedIn() {
    return !!this.getToken()
  }

  setToken(accessToken) {
    localStorage.setItem('access_token', accessToken)
  }

  getToken() {
    return localStorage.getItem('access_token')
  }

  logout() {
    localStorage.removeItem('access_token');
    location.replace("/");
  }
}