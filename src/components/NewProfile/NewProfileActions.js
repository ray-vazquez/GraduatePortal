import {
  NEW_PROFILE
} from "../../constants/actionTypes";
import {
  fetchProfilesNewRequest
} from "../../services/api";

export const profileNew = (profileData) => {
  console.log('actions new profile:', profileData);
  return {
    type: NEW_PROFILE,
    payload: fetchProfilesNewRequest(profileData)
  };
};