import * as types from "./constants/actionTypes";

const sharedReducer = (
  state = {
    profiles: null,
    isAdmin: false
  },
  action
) => {
  switch (action.type) {
    case types.LOGIN_FULFILLED: {
      const { isSuccess } = action.payload;
      return isSuccess
        ? { ...state, isAdmin: true }
        : { ...state };
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