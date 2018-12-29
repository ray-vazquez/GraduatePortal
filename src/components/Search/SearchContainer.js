import { connect } from "react-redux";
import Search from "./Search";

import { fetchAllProfiles } from "../../actions/searchActions";
//import { searchProfiles } from "../../actions/searchActions";

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
    // searchProfiles: userInput => dispatch(searchProfiles(userInput))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
