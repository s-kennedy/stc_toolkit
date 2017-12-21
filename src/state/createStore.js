import { createStore as reduxCreateStore } from "redux"
import { authentication } from './reducers'

const initialState = { isLoggedIn: false }

const createStore = () => reduxCreateStore(authentication, initialState)

export default createStore;