import { STORE_SEARCH_INPUT } from "../../constants/actionTypes";

const SearchReducer = (
  state = {
    storedSearchInput: ""
  },
  action
) => {
  switch (action.type) {
    case STORE_SEARCH_INPUT:
      return {
        ...state,
        storedSearchInput: action.searchInput
      };
    default:
      return state;
  }
};

export default SearchReducer;
