export const adminTools = (state={}, action) => {
  switch (action.type) {
    case 'USER_LOGGED_IN':
      return { ...state, isLoggedIn: true, userRoles: action.userRoles }
    case 'LOCK_FAILURE':
      return { ...state, isLoggedIn: false, error: action.err }
    case 'USER_LOGGED_OUT':
      return { ...state, isLoggedIn: false, isEditingPage: false }
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
    case 'UPDATE_PAGE_HEADER':
      const headerData = action.header
      return {
        ...state,
        header: {
          ...state.header,
          ...headerData
        }
      }
    case 'UPDATE_SECTION_CONTENT':
    const { sectionIndex, contentIndex, newContent } = action;
      return {
        ...state,
        body: {
          ...state.body,
          [sectionIndex]: {
            ...state.body[sectionIndex],
            content: {
              ...state.body[sectionIndex].content,
              [contentIndex]: {
                ...state.body[sectionIndex].content[contentIndex],
                ...newContent
              }
            }
          }
        }
      }
    case 'DUPLICATE_SECTION':
      const newSection = Object.assign({}, state.body[action.sectionIndex])
      const stateArr = Object.values(state.body)
      stateArr.splice(action.sectionIndex, 0, newSection)
      return { ...state, body: stateArr }
    case 'DELETE_SECTION':
      const stateArray = Object.values(state.body)
      stateArray.splice(action.sectionIndex, 1)
      return { ...state, body: stateArray }
    default:
      return state
  }
}

export const notifications = (state={}, action) => {
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      return {
        ...state,
        message: action.message,
        color: action.color
      }
    case 'CLOSE_NOTIFICATION':
      return {
          ...state,
          message: null,
          color: null
      }
    default:
      return state
  }
}



export const appReducers = (state = {}, action) => {
  return {
    notifications: notifications(state.notifications, action),
    adminTools: adminTools(state.adminTools, action),
    pageData: pageData(state.pageData, action),
    content: content(state.content, action),
  }
}

