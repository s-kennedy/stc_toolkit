import { api } from '../utils/init';
import AuthService from '../utils/AuthService';

export function userLoggedIn(userRoles=[]) {
  return { type: 'USER_LOGGED_IN', userRoles }
}

export function userLoggedOut() {
  return { type: 'USER_LOGGED_OUT' }
}

// export function checkAuthentication() {
//   return dispatch => {
//     const token = localStorage.getItem('stc_toolkit_access_token')
//     if (!!token) {
//       dispatch(userLoggedIn(roles))
//     }
//   }
// }

// PAGE EDITING ------------------------

export function toggleEditing() {
  return { type: 'TOGGLE_EDITING'}
}

export function savePage(pageData, content) {
  return dispatch => {
    dispatch(savingPage());

    const pageId = pageData.id;
    const url = `/pages/${pageId}`;
    const token = auth.getToken();
    const data = {
      page: {
        content: content,
        title: pageData.title
      },
      id: pageId
    }

    api.put(url, data, { headers: { 'Authorization': 'Bearer ' + token } })
      .then((res) => {
        if (res.status === 200) {
          dispatch(savePageSuccess());
        } else {
          dispatch(savePageFailure(res))
        }
      })
     .catch((err) => dispatch(savePageFailure(err)))
  }
}

export function savingPage() {
  return { type: 'SAVING_PAGE' }
}

export function savePageSuccess() {
  return { type: 'SAVE_PAGE_SUCCESS' }
}

export function savePageFailure(err) {
  return { type: 'SAVE_PAGE_FAILURE', err }
}

export function updatePageContent(content) {
  return { type: 'UPDATE_PAGE_CONTENT', content }
}

export function updatePageMetaData(pageData) {
  return { type: 'UPDATE_PAGE_META_DATA', pageData }
}

export function updatePageTitle(title) {
  return { type: 'UPDATE_PAGE_TITLE', title }
}

export function updateSectionContent(sectionIndex, contentIndex, newContent) {
  return { type: 'UPDATE_SECTION_CONTENT', sectionIndex, contentIndex, newContent }
}

export function duplicateSection(sectionIndex) {
  return { type: 'DUPLICATE_SECTION', sectionIndex }
}

export function deleteSection(sectionIndex) {
  return { type: 'DELETE_SECTION', sectionIndex }
}

