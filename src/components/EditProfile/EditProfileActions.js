import history from '../../history'
import { EDIT_PROFILE } from '../../constants/actionTypes'
// import { profileRequest } from '../services/mock-ajax/api'

const profileAction = () => {
  return {
    type: EDIT_PROFILE,
    payload: profileAction()
  }
}

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
export const editProfile = () => {
  return dispatch => {
    dispatch(profileAction()).then(data => {
      if (data.value.isSuccess) {
        history.push('/')
      }
    })
  }
}
