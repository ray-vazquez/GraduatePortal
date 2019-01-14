import * as types from "../../constants/actionTypes";
import { fetchAllProfilesRequest } from "../../services/api";

export const fetchAllProfiles = () => {
  return {
    type: types.FETCH_ALL_PROFILES,
    payload: fetchAllProfilesRequest()
  };
};

export const storeSearchInput = (searchInput) => {
  return {
    type: types.STORE_SEARCH_INPUT,
    searchInput
  };
};
