import * as types from './constants/actionTypes';

const ViewProfileReducer = (
    state = {
        profileData: {},
        isAdmin: false,
        isLoading: false,
        hasError: false,
        profiles: []
    },
    action
) => {
    switch (action.type) {
        case types.FETCH_ALL_PROFILES_REJECTED:
            return {
                ...state,
                isLoading: false,
                hasError: true,
                profiles: [...state.profiles]
            };
        case types.VIEW_PROFILE_FULFILLED:
            return {
                ...state,
                isLoading: true,
                hasError: false,
                profileData: state.profiles.filter((profile, index) => {
                    return profile.graduateId === this.props.match.params.graduateId;
                })
            };
        case types.VIEW_PROFILE_REJECTED:
            return {
                ...state,
                isLoading: false,
                hasError: true
            };
        default:
            return state
    }
}

export default ViewProfileReducer;