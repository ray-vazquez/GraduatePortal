import { connect } from "react-redux";
import Search from "./Search";

import { fetchAllProfiles } from "./searchActions";

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
)(Search);
