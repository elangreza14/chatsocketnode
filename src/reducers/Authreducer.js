export const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'SIGNIN':
      return {
        ...state,
        isLoggedIn: true,
        userId: action.userId,
        timeout: action.timeout,
        username: action.username,
        email: action.email
      }
    case 'RESTORE':
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
        userId: action.userId,
        timeout: action.timeout,
        username: action.username,
        email: action.email
      }
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        userId: null,
        timeout: null,
        username: null,
        email: null
      }
    default:
      return state
  }
}
