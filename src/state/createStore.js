import { createStore as reduxCreateStore } from "redux"
import { adminTools } from './reducers'

const initialState = { isLoggedIn: false, isEditingPage: false }

const createStore = () => reduxCreateStore(adminTools, initialState)

export default createStore;