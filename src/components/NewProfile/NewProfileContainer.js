import {
  connect
} from "react-redux";
import NewProfile from "./NewProfile";
import {
  profileNew,
  uploadImageFile,
  uploadResumeFile
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
  uploadImageFile: (data) => dispatch(uploadImageFile(data)),
  uploadResumeFile: (data) => dispatch(uploadResumeFile(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewProfile);