import * as types from "./constants/actionTypes";

const reducer = (
  state = {
    profiles: {},
    isAdmin: false,
    searchInput: "",
    hasSearched: false,
    isLoading: false,
    hasError: false
  },
  action
) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        isAdmin: true
      };
    default:
      return state;
  }
};

export default reducer;