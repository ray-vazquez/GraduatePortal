import * as types from "./constants/actionTypes";

// *******  PROFILES ARE TEST EXAMPLES AND FOR DEVELOPMENT ONLY  *********
const reducer = (
  state = {
    profiles: {},
    isAdmin: false,
    searchInput: "",
    searchStarted: false,
    isLoading: false,
    hasError: false
  },
  action
) => {
  switch (action.type) {
    case types.SET_SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.searchInput,
        searchStarted: true
      };
    case types.SEARCH_PROFILES_PENDING:
      return {
        ...state,
        searchStarted: true,
        isLoading: true,
        hasError: false
      };
    case types.SEARCH_PROFILES_FULFILLED: 
      const { profiles } = action.payload;
      return {
        ...state,
        searchStarted: true,
        profiles
      };
    case types.SEARCH_PROFILES_REJECTED:
      return {
        ...state,
        searchStarted: true,
        isLoading: false,
        hasError: true
      };
    default:
      return state;
  }
};

export default reducer;