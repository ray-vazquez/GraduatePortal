import {
  EDIT_PROFILE
} from "../../constants/actionTypes";
import {
  fetchProfilesEditRequest
} from "../../services/api";

export const fetchProfileEdit = (profileData) => {
  return {
    type: EDIT_PROFILE,
    payload: fetchProfilesEditRequest(profileData)
  };
};