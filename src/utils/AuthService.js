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
    this.lock.show()
  }

  loggedIn() {
    const token = this.getToken();
    if (!token) { return false }

    const decodedToken = this.decodeToken();
    const expiry = decodedToken.exp;
    const currentTimestamp = Math.round(+new Date / 1e3);
    return expiry >= currentTimestamp;
  }

  setToken(accessToken) {
    localStorage.setItem('stc_toolkit_access_token', accessToken)
  }

  getToken() {
    return localStorage.getItem('stc_toolkit_access_token')
  }

  logout() {
    localStorage.removeItem('stc_toolkit_access_token');
  }

  decodeToken() {
    const token = localStorage.getItem('stc_toolkit_access_token')
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }

  rolesFromToken() {
    const decodedToken = this.decodeToken();
    return decodedToken['https://savethechildren.net/roles'];
  }
}