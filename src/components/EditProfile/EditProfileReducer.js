import * as types from "../../constants/actionTypes";

const EditProfileReducer = (
  state = {
    isLoading: false,
    hasError: false,
    isAdmin: false
  },
  action
) => {
  switch (action.types) {
    case types.FETCH_ALL_PROFILES_REJECTED:
      {
        return {
          ...state,
          isLoading: false,
          hasError: true
        };
      }
    default:
      return state;
  }
};

export default EditProfileReducer;