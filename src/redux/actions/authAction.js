import axios from "axios";

export const onLogin = (email, password) => (dispatch) => {
  const data = {
    email: email,
    password: password,
  };

  axios
    .post("https://reqres.in/api/login", data)
    .then((res) => {
      // Jika login berhasil
      if (res.status === 200) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: {
            isAuth: true,
          },
        });
      } else {
        dispatch({ type: "LOGIN_FAILURE" });
      }
    })
    .catch((err) => {
      dispatch({ type: "LOGIN_FAILURE" });
    });
};

export const onLogout = (param) => {
  return {
    type: "LOGOUT",
    payload: param,
  };
};
