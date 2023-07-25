const initState = {
  isAuth: false,
  username: "",
  loginError: false,
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuth: action.payload.isAuth,
        username: action.payload.username,
        loginError: false, // mereset login error
      };

    case "LOGIN_FAILURE":
      return {
        ...state,
        isAuth: false,
        username: "",
        loginError: true, // Set login error state ketika login gagal
      };

    case "LOGOUT":
      return {
        ...state,
        isAuth: false,
        username: "",
      };

    default:
      return state;
  }
};
