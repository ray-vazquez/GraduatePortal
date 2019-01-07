import * as types from './constants/actionTypes';

const EditProfileReducer = (
  state = {
    profiles: {},
    isAdmin: true,
    userInput: '',
    hasSearched: false,
    isLoading: false,
    hasError: false
  },
  action
) => {
  switch (action.type) {
    case types.EDIT_PROFILE_PENDING:
      return {}
    case types.EDIT_PROFILE_FULFILLED:
      return {}
    case types.EDIT_PROFILE_REJECTED:
      return {}
    default:
      return state
  }
}

export default EditProfileReducer;