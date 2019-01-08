import { LOGOUT } from "../../constants/actionTypes";
import history from "../../history";

const logoutAction = () => {
  return {
    type: LOGOUT
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  return dispatch => {
    dispatch(logoutAction());
    history.push("/");
  };
};
