import { auth } from '../utils/init';

export function showLock() {
  return { type: 'SHOW_LOCK' }
}

export function lockSuccess(userRoles) {
  return { type: 'LOCK_SUCCESS', userRoles }
}

export function loginFailure(err) {
  return { type: 'LOCK_FAILURE', err }
}

export function logIn() {
  return dispatch => {
    auth.login();
    dispatch(showLock())
  }
}

export function doAuthentication() {
  return dispatch => {
    auth.setAuthenticatedCallback((authResult) => {
      if (authResult.accessToken) {
        auth.setToken(authResult.accessToken);
        const roles = auth.rolesFromToken();
        return dispatch(lockSuccess(roles))
      } else {
        return dispatch(lockError())
      }
    })
  }
}

export function checkAuthentication() {
  return dispatch => {
    const isLoggedIn = auth.loggedIn();

    if (isLoggedIn) {
      const roles = auth.rolesFromToken();
      return dispatch(lockSuccess(roles))
    }
  }
}

export function loggedOutSuccess() {
  return { type: 'LOG_OUT_SUCCESS' }
}

export function logOut() {
  return dispatch => {
    auth.logout()
    dispatch(loggedOutSuccess())
  }
}

export function toggleEditing() {
  return { type: 'TOGGLE_EDITING'}
}

export function savePage(content) {
  return { type: 'SAVE_PAGE', content }
}

export function updatePageContent(content) {
  return { type: 'UPDATE_PAGE_CONTENT', content }
}

export function updatePageData(pageData) {
  return { type: 'UPDATE_PAGE_DATA', pageData }
}

export function updatePageTitle(title) {
  return { type: 'UPDATE_PAGE_TITLE', title }
}

