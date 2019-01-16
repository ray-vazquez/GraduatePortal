import { connect } from "react-redux";
import ViewProfile from "./ViewProfile";
import { fetchAllProfiles } from "../Search/searchActions";
import { profileEdit } from "../EditProfile/EditProfileActions";

function mapStateToProps(state) {
    return {
        ...state.Shared
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchAllProfiles: () => dispatch(fetchAllProfiles()),
        profileEdit: (profileData) => dispatch(profileEdit(profileData))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewProfile);