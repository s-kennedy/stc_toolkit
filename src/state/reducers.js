export const authentication = (state, action) => {
  switch (action.type) {
    case 'LOG_IN':
      console.log('LOGGING IN')
      return { ...state, isLoggedIn: true }
    case 'LOG_OUT':
      console.log('LOGGING OUT')
      return { ...state, isLoggedIn: false }
    default:
      return state
  }
}

