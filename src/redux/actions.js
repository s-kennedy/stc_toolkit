import { api } from '../utils/init';

// AUTHENTICATION ------------------------

export function userLoggedIn(userRoles=[]) {
  return { type: 'USER_LOGGED_IN', userRoles }
}

export function userLoggedOut() {
  return { type: 'USER_LOGGED_OUT' }
}

// NOTIFICATIONS ------------------------

export function showNotification(message, color) {
  return { type: 'SHOW_NOTIFICATION', message, color }
}

export function closeNotification() {
  return { type: 'CLOSE_NOTIFICATION' }
}

// PAGE EDITING ------------------------

export function toggleEditing() {
  return { type: 'TOGGLE_EDITING'}
}

export function savePage(pageData, content, token) {
  return dispatch => {
    dispatch(savingPage());

    const pageId = pageData.id;
    const url = `/pages/${pageId}`;
    const data = {
      page: {
        content: content,
        title: pageData.title
      },
      id: pageId
    }

    api.put(url, data, { headers: { 'Authorization': 'Bearer ' + token } })
      .then((res) => {
        dispatch(toggleEditing())
        if (res.status === 200) {
          dispatch(showNotification('Your changes have been saved.', 'success'));
        } else {
          dispatch(showNotification('There was an error saving your page, please try again.', 'danger'));
        }
      })
     .catch((err) => dispatch(showNotification(`There was an error saving your page: ${err}`, 'danger')))
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

