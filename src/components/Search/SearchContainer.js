import { connect } from "react-redux";
import Search from "./Search";
import { searchProfiles, setSearchInput } from "../../actions/searchActions";

function mapStateToProps({ profiles, isAdmin, searchInput, searchStarted, isLoading, hasError }) {
  return {
    profiles,
    isAdmin,
    searchInput,
    searchStarted,
    isLoading,
    hasError
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchProfiles: (searchInput) => dispatch(searchProfiles(searchInput)),
    setSearchInput: (searchInput) => dispatch(setSearchInput(searchInput))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);