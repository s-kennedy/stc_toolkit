import axios from 'axios'
import logo from '../assets/img/STC_Logo_Horiz.png'
import AuthService from './AuthService';

export const api = axios.create({
                    baseURL: process.env.API_URL
                  })

export const auth = new AuthService();