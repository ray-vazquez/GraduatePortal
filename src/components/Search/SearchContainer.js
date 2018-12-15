import { connect } from "react-redux";
import Search from "./Search";

import { fetchAllProfiles, searchProfiles } from "../../actions/searchActions";

function mapStateToProps({
  profiles,
  userInut,
  hasSearched,
  isLoading,
  hasError
}) {
  return {
    profiles,
    userInut,
    hasSearched,
    isLoading,
    hasError
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllProfiles: () => dispatch(fetchAllProfiles()),
    searchProfiles: userInput => dispatch(searchProfiles(userInput))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
