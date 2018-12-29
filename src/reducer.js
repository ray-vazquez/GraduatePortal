import * as types from "./constants/actionTypes";

const reducer = (
  state = {
    profiles: null,
    isAdmin: true,
    userInput: "",
    hasSearched: false,
    isLoading: false,
    hasError: false
  },
  action
) => {
  switch (action.type) {
    case types.LOGIN_FULFILLED: {
      const { isSuccess } = action.payload;
      return isSuccess
        ? {
            ...state,
            isAdmin: true,
            isLoginInvalid: false,
            isLoading: false,
            hasError: false,
            validationState: "success"
          }
        : {
            ...state,
            isLoginInvalid: true,
            isLoading: false,
            hasError: false,
            validationState: "error"
          };
    }
    case types.LOGIN_PENDING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
        isLoginInvalid: false
      };
    case types.LOGIN_REJECTED:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        isLoginInvalid: false
      };
    case types.LOGOUT:
      return {
        ...state,
        isAdmin: false
      };
    default:
      return state;
  }
};

export default reducer;
