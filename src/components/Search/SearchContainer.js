import { connect } from "react-redux";
import Search from "./Search";

import { fetchAllProfiles, storeSearchInput } from "./searchActions";

function mapStateToProps(state) {
  return {
    ...state.Shared,
    ...state.Search
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllProfiles: () => dispatch(fetchAllProfiles()),
    storeSearchInput: (searchInput) => dispatch(storeSearchInput(searchInput))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
