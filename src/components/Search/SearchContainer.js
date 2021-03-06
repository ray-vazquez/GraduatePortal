import { connect } from "react-redux";
import Search from "./Search";

import { fetchAllProfiles, storeSearchInput } from "./searchActions";
import { profileEdit } from "../EditProfile/EditProfileActions";

function mapStateToProps(state) {
  return {
    ...state.Shared,
    ...state.Search
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllProfiles: () => dispatch(fetchAllProfiles()),
    storeSearchInput: (searchInput) => dispatch(storeSearchInput(searchInput)),
    profileEdit: (profileData) => dispatch(profileEdit(profileData))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
