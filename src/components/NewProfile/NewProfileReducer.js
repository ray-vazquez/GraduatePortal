import * as types from './constants/actionTypes';

const NewProfileReducer = (
  state = {
    profileData: {},
    isAdmin: true,
    isLoading: false,
    hasError: false
  },
  action
) => {
  switch (action.type) {
    case types.NEW_PROFILE_REJECTED:
      return {
        ...state,
        isLoading: false,
        hasError: true
      };
    default:
      return state
  }
}

export default NewProfileReducer;