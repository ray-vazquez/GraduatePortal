import * as types from "../../constants/actionTypes";

export const logout = () => {
  localStorage.removeItem('token');
  return {
    type: types.LOGOUT
  };
};