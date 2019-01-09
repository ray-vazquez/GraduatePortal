import {
  connect
} from "react-redux";
import NewProfile from "./NewProfile";
import {
  profileNew
} from "./NewProfileActions";

function mapStateToProps(state) {
  return {
    profileData: state.NewProfile.profileData,
    isLoading: state.NewProfile.isLoading,
    hasError: state.NewProfile.hasError
  };
}

function mapDispatchToProps(dispatch) {
  return {
    profileNew: (profileData) => {
      console.log('dispatch new profile: ', profileData);
      dispatch(profileNew(profileData))
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewProfile);