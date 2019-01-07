import history from "../../history";
import { LOGIN } from "../../constants/actionTypes";
import { loginRequest } from "../../services/api";

const loginAction = (username, passsword) => {
  return {
    type: LOGIN,
    payload: loginRequest(username, passsword)
  };
};

export const login = (username, passsword) => {
  return dispatch => {
    dispatch(loginAction(username, passsword)).then(data => {
      if (data.value.token) {
        history.push("/");
      }
    });
  };
};
