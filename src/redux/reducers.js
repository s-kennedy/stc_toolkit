export const adminTools = (state={}, action) => {
  switch (action.type) {
    case 'USER_LOGGED_IN':
      return { ...state, isLoggedIn: true, userRoles: action.userRoles }
    case 'LOCK_FAILURE':
      return { ...state, isLoggedIn: false, error: action.err }
    case 'USER_LOGGED_OUT':
      return { ...state, isLoggedIn: false }
    case 'TOGGLE_EDITING':
      return { ...state, isEditingPage: !state.isEditingPage }
    case 'SAVING_PAGE':
      return { ...state, savingPage: true }
    case 'SAVE_PAGE_SUCCESS':
      console.log('page saved!')
      return { ...state, savingPage: false, pageSaved: true }
    case 'SAVE_PAGE_FAILURE':
      console.log('page not saved :(')
      console.log(action.err)
      return { ...state, savingPage: true, pageSaved: false, error: action.err }
    default:
      return state
  }
}

export const pageData = (state={}, action) => {
  switch (action.type) {
    case 'UPDATE_PAGE_META_DATA':
      return {
        ...action.pageData
      }
    case 'UPDATE_PAGE_TITLE':
      return {
          ...state,
          title: action.title
      }
    default:
      return state
  }
}

export const content = (state={}, action) => {
  switch (action.type) {
    case 'UPDATE_PAGE_CONTENT':
      return {
        ...action.content
      }
    case 'UPDATE_SECTION_CONTENT':
    const { sectionIndex, contentIndex, newContent } = action;
      return {
        ...state,
        [sectionIndex]: {
          ...state[sectionIndex],
          content: {
            ...state[sectionIndex].content,
            [contentIndex]: {
              ...state[sectionIndex].content[contentIndex],
              ...newContent
            }
          }
        }
      }
    case 'DUPLICATE_SECTION':
      const newSection = Object.assign({}, state[action.sectionIndex])
      const stateArr = Object.values(state)
      stateArr.splice(action.sectionIndex, 0, newSection)
      return stateArr
    case 'DELETE_SECTION':
      const stateArray = Object.values(state)
      stateArray.splice(action.sectionIndex, 1)
      return stateArray
    default:
      return state
  }
}

export const appReducers = (state = {}, action) => {
  return {
    adminTools: adminTools(state.adminTools, action),
    pageData: pageData(state.pageData, action),
    content: content(state.content, action),
  }
}
