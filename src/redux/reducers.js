export const adminTools = (state, action) => {
  switch (action.type) {
    case 'SHOW_LOCK':
      return { ...state, showingLock: true }
    case 'LOCK_SUCCESS':
      return { ...state, showingLock: false, isLoggedIn: true, userRoles: action.userRoles }
    case 'LOCK_FAILURE':
      return { ...state, showingLock: false, isLoggedIn: false, error: action.err }
    case 'LOG_OUT_SUCCESS':
      return { ...state, isLoggedIn: false }
    case 'TOGGLE_EDITING':
      return { ...state, isEditingPage: !state.isEditingPage }
    case 'UPDATE_PAGE_CONTENT':
      console.log('page content', action.content)
      return {
        ...state,
        content: action.content
      }
    case 'UPDATE_PAGE_DATA':
      return {
        ...state,
        pageData: action.pageData
      }
    case 'UPDATE_PAGE_TITLE':
      return {
        ...state,
        pageData: {
          ...state.pageData,
          title: action.title
        }
      }
    case 'SAVE_PAGE':
      return {
        ...state,
        content: action.content
      }
    default:
      return state
  }
}
