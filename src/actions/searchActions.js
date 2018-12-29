import * as types from "../constants/actionTypes";
import { fetchAllProfilesRequest } from "../services/mock-ajax/api";

// import {
//   fetchAllProfilesRequest,
//   searchProfilesRequest
// } from "../services/api";

export const fetchAllProfiles = () => {
  return {
    type: types.FETCH_ALL_PROFILES,
    payload: fetchAllProfilesRequest()
  };
};
