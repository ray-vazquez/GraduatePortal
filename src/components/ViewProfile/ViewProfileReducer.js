import * as types from "../../constants/actionTypes";

const ViewProfileReducer = (
    state = {
        isLoading: false,
        hasError: false
    },
    action
) => {
    switch (action.types) {
        case types.FETCH_ALL_PROFILES_REJECTED:
            return {
                ...state,
                isLoading: false,
                hasError: true
            };
        default:
            return state;
    }
};

export default ViewProfileReducer;