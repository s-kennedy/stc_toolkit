// import AuthService from './AuthService'
import axios from 'axios'

// export const auth = new AuthService(
//                     process.env.AUTH0_CLIENT_ID,
//                     process.env.AUTH0_DOMAIN)

export const api = axios.create({
                    baseURL: process.env.API_URL
                  })