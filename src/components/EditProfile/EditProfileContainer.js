import {
  connect
} from "react-redux";
import EditProfile from "./EditProfile";

import {
  fetchAllProfiles
} from "../Search/searchActions";

function mapStateToProps(state) {
  return {
    profiles: state.Shared.profiles,
    isLoading: state.Search.isLoading,
    hasError: state.Search.hasError
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllProfiles: () => dispatch(fetchAllProfiles())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);