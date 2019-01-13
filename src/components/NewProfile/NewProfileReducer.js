import * as types from '../../constants/actionTypes';

const NewProfileReducer = (
  state = {
    isAdmin: true,
    isLoading: false,
    hasError: false,
    graduateId: null
  },
  action
) => {
  switch (action.type) {
    case types.NEW_PROFILE_FULFILLED:
      const { graduateId } = action.payload;
      console.log("from NewProfileReducer: ", graduateId);
      return {
        ...state,
        graduateId 
      };
    case types.NEW_PROFILE_PENDING:
      return {
        ...state,
        isLoading: true,
        hasError: false
      };
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