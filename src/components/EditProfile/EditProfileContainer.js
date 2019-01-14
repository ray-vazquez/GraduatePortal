import {
  connect
} from "react-redux";
import EditProfile from "./EditProfile";

import {
  profileEdit
} from "../EditProfile/EditProfileActions";

import {
  uploadImageFile,
  uploadResumeFile
} from "../NewProfile/NewProfileActions";

import {
  fetchAllProfiles
} from "../Search/searchActions";

function mapStateToProps(state) {
  return {
    ...state.Shared,
    ...state.EditProfile
  };
}

const mapDispatchToProps = dispatch => ({
  profileEdit: (profileData) => dispatch(profileEdit(profileData)),
  fetchAllProfiles: () => dispatch(fetchAllProfiles()),
  uploadImageFile: (data) => dispatch(uploadImageFile(data)),
  uploadResumeFile: (data) => dispatch(uploadResumeFile(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);