import axios from 'axios'
import logo from '../assets/img/STC_Logo_Horiz.png'

export const api = axios.create({
                    baseURL: process.env.API_URL
                  })

export const lock = (clientId, domain) => {
  return new Auth0Lock(clientId, domain, {
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
}