import {
  NEW_PROFILE,
  UPLOAD_FILE
} from "../../constants/actionTypes";
import {
  fetchProfilesNewRequest,
  uploadImageRequest,
  uploadResumeRequest
} from "../../services/api";

export const profileNew = (profileData) => {
  console.log('actions new profile:', profileData);
  return {
    type: NEW_PROFILE,
    payload: fetchProfilesNewRequest(profileData)
  };
};

export const uploadImageFile = (data) => {
  console.log('actions image uploadFile: ', data);
  return {
    type: UPLOAD_FILE,
    payload: uploadImageRequest(data)
  };
};

export const uploadResumeFile = (data) => {
  console.log('actions resume uploadFile: ', data);
  return {
    type: UPLOAD_FILE,
    payload: uploadResumeRequest(data)
  };
};