import { connect } from "react-redux";
import Search from "./Search";

import { fetchAllProfiles } from "./searchActions";

function mapStateToProps(state) {
  return {
    ...state.Shared
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
