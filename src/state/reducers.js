export const adminTools = (state, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return { ...state, isLoggedIn: true }
    case 'LOG_OUT':
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
