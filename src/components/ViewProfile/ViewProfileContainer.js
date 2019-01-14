import { connect } from "react-redux";
import ViewProfile from "./ViewProfile";
import { fetchAllProfiles } from "../Search/searchActions";

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
)(ViewProfile);