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
  return {
    type: EDIT_PROFILE,
    payload: fetchProfileEditRequest(profileData)
  };
};

export const uploadImageFile = (data) => {
  return {
    type: UPLOAD_FILE,
    payload: uploadImageRequest(data)
  };
};

export const uploadResumeFile = (data) => {
  return {
    type: UPLOAD_FILE,
    payload: uploadResumeRequest(data)
  };
};