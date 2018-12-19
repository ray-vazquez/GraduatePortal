import history from "../../history";
import { LOGIN } from "../../constants/actionTypes";
import { loginRequest } from "../../services/mock-ajax/api";
// import { loginRequest } from "../services/api";

const loginAction = (username, passsword) => {
  return {
    type: LOGIN,
    payload: loginRequest(username, passsword)
  };
};

// ******  UNCOMMENT THESE LINES WHEN REAL API IS READY  *******
// export const login = (username, passsword) => {
//   return dispatch => {
//     dispatch(loginAction(username, passsword)).then(data => {
//       if (data.value.token) {
//         history.push("/");
//       }
//     });
//   };
// };


// ******  DELETE THESE LINES WHEN REAL API IS READY  *******
export const login = (username, passsword) => {
  return dispatch => {
    dispatch(loginAction(username, passsword)).then(data => {
      if (data.value.isSuccess) {
        history.push("/");
      }
    });
  };
};
