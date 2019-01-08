import {
    connect
} from "react-redux";
import ViewProfile from "./ViewProfile";
import {
    fetchAllProfiles
} from "./ViewProfileActions";

function mapStateToProps(state) {
    return {
        profiles: state.Shared.profiles,
        // isLoading: state.ViewProfile.isLoading,
        // hasError: state.ViewProfile.hasError
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