import {
  NEW_PROFILE
} from "../../constants/actionTypes";
import {
  fetchProfilesNewRequest
} from "../../services/api";

export const profileNew = (profileData) => {
  return {
    type: NEW_PROFILE,
    payload: fetchProfilesNewRequest(profileData)
  };
};