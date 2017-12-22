import Auth0Lock from 'auth0-lock'
import logo from '../assets/img/STC_Logo_Horiz.png'

export default class AuthService {
  constructor(clientId, domain) {
    // Configure Auth0
    this.lock = new Auth0Lock(clientId, domain, {
      oidcConformant: true,
      auth: {
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
    this.setAuthenticatedCallback = this.setAuthenticatedCallback.bind(this)
    this.login = this.login.bind(this)
  }

  setAuthenticatedCallback(callback) {
    this.lock.on('authenticated', callback)
  }

  login() {
    console.log('SHOW THE LOCK')
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
  }

  decodeToken() {
    const token = localStorage.getItem('access_token')
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }

  rolesFromToken() {
    const decodedToken = this.decodeToken();
    return decodedToken['https://savethechildren.net/roles'];
  }
}