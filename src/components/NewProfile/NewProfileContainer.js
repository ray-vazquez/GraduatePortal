import {
  connect
} from "react-redux";
import NewProfile from "./NewProfile";
import {
  profileNew,
  uploadFile
} from "./NewProfileActions";

function mapStateToProps(state) {
  return {
    profileData: state.NewProfile.profileData,
    isLoading: state.NewProfile.isLoading,
    hasError: state.NewProfile.hasError
  };
}

const mapDispatchToProps = dispatch => ({
  profileNew: (profileData) => dispatch(profileNew(profileData)),
  uploadFile: (data) => dispatch(uploadFile(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewProfile);