import * as types from "../../constants/actionTypes";

const EditProfileReducer = (
  state = {
    isLoading: false,
    hasError: false
  },
  action
) => {
  switch (action.types) {
    case types.FETCH_ALL_PROFILES_FULFILLED:
      return {
        ...state,
        isLoading: false,
        hasError: false
      };
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

export default EditProfileReducer;