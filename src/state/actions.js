export function logIn() {
  return { type: 'LOG_IN' }
}

export function logOut() {
  return { type: 'LOG_OUT' }
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
