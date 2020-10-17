export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN":
      console.log(action)
      return {
        ...state,
        isLoggedIn: true,
        userId: action.userId,
        timeout: action.timeout,
        username: action.username,
      };
    case "SIGN_OUT":
      return {
        isLoggedIn: false,
        userId: null,
        timeout: null,
        username: null,
      };
    case "RESTORE_USER":
      return {
        isLoggedIn: action.isLoggedIn,
        userId: action.userId,
        timeout: action.timeout,
        username: action.username,
      };
    default:
      return state;
  }
};
