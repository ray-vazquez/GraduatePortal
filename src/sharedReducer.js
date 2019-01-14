import * as types from "./constants/actionTypes";

const sharedReducer = (
  state = {
    profiles: null,
    isAdmin: !!localStorage.token,
    isLoading: false,
    hasError: false
  },
  action
) => {
  switch (action.type) {
    case types.LOGIN_FULFILLED: {
      const { token } = action.payload;
      return token ? { ...state, isAdmin: true } : { ...state, isAdmin: false };
    }
    case types.LOGOUT:
      return {
        ...state,
        isAdmin: false
      };
    case types.FETCH_ALL_PROFILES_FULFILLED: {
      const { profiles } = action.payload;
      return {
        ...state,
        profiles
      };
    }
    case types.FETCH_ALL_PROFILES_PENDING:
      return {
        ...state,
        isLoading: true,
        hasError: false
      };
    case types.FETCH_ALL_PROFILES_REJECTED:
      return {
        ...state,
        isLoading: false,
        hasError: true
      };
    default:
      return state;
  }
};

export default sharedReducer;
