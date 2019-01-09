import {
  connect
} from "react-redux";
import NewProfile from "./NewProfile";
import {
  profileNew
} from "./NewProfileActions";

function mapStateToProps({
  isLoading,
  hasError,
  isLoginInvalid,
  validationState,
  profileData
}) {
  return {
    isLoading,
    hasError,
    isLoginInvalid,
    validationState,
    profileData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    newProfile: (profileData) => dispatch(profileNew(profileData))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewProfile);