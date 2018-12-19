import * as types from "../../constants/actionTypes";

const LoginReducer = (
  state = {
    isLoginInvalid: false,
    isLoading: false,
    hasError: false,
    validationState: null
  },
  action
) => {
  switch (action.type) {
    case types.LOGIN_FULFILLED: {
      const { isSuccess } = action.payload;
      return isSuccess
        ? {
            ...state,
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
    default:
      return state;
  }
};

export default LoginReducer;