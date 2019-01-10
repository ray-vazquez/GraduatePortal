import {
  NEW_PROFILE,
  UPLOAD_FILE
} from "../../constants/actionTypes";
import {
  fetchProfilesNewRequest,
  uploadFilesRequest
} from "../../services/api";

export const profileNew = (profileData) => {
  console.log('actions new profile:', profileData);
  return {
    type: NEW_PROFILE,
    payload: fetchProfilesNewRequest(profileData)
  };
};

export const uploadFile = (data) => {
  console.log('actions new profile uploadFile: ', data);
  return {
    type: UPLOAD_FILE,
    payload: uploadFilesRequest(data)
  };
};