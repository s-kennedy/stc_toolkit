import Auth0Lock from 'auth0-lock'
import logo from '../assets/img/STC_Logo_Horiz.png'
import { decodeJwt } from './jwt'

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
    this.login = this.login.bind(this)
  }

  login() {
    this.lock.show()
  }

  loggedIn() {
    return !!this.getToken()
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
    return decodeJwt(token)
  }

  rolesFromToken() {
    const decodedToken = this.decodeToken();
    return decodedToken['https://savethechildren.net/roles'];
  }
}