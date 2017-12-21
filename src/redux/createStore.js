import { createStore as reduxCreateStore } from "redux"
import { applyMiddleware } from "redux"
import { adminTools } from './reducers'
import thunk from 'redux-thunk';

const initialState = { isLoggedIn: false, isEditingPage: false }

const createStore = () => reduxCreateStore(adminTools, initialState, applyMiddleware(thunk))

export default createStore;