import * as types from "./constants/actionTypes";

const sharedReducer = (
  state = {
    profiles: null,
    isAdmin: !!localStorage.token
  },
  action
) => {
  switch (action.type) {
    case types.LOGIN_FULFILLED: {
      const { token } = action.payload;
      console.log(token);
      return token
        ? { ...state, isAdmin: true }
        : {  ...state, isAdmin: false };
    }
    case types.LOGOUT:
      return {
        ...state,
        isAdmin: false
      };
    default:
      return state;
  }
};

export default sharedReducer;