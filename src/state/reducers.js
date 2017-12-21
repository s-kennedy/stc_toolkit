export const adminTools = (state, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return { ...state, isLoggedIn: true }
    case 'LOG_OUT':
      return { ...state, isLoggedIn: false }
    case 'TOGGLE_EDITING':
      return { ...state, isEditingPage: !state.isEditingPage }
    case 'UPATE_PAGE_CONTENT':
      console.log('page content', action.content)
      return {
        ...state
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
