import {
  EDIT_PROFILE
} from "../../constants/actionTypes";
import {
  fetchProfileEditRequest
} from "../../services/api";

export const fetchProfileEdit = (profileData) => {
  return {
    type: EDIT_PROFILE,
    payload: fetchProfileEditRequest(profileData)
  };
};