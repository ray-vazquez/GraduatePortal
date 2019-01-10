import {
  EDIT_PROFILE,
  UPLOAD_FILE
} from "../../constants/actionTypes";
import {
  fetchProfileEditRequest,
  uploadImageRequest,
  uploadResumeRequest
} from "../../services/api";

export const profileEdit = (profileData) => {
  console.log('actions edit profile:', profileData);
  return {
    type: EDIT_PROFILE,
    payload: fetchProfileEditRequest(profileData)
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