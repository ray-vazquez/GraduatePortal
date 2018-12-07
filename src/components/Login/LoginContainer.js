import { connect } from "react-redux";
import Login from "./Login";
import { login } from "../../actions/loginActions";

function mapStateToProps({ isLoading, hasError, isLoginInvalid, validationState }) {
  return {
    isLoading,
    hasError,
    isLoginInvalid,
    validationState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: (username, password) => dispatch(login(username, password))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);