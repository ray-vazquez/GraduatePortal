import * as types from "../constants/actionTypes";

import {
  fetchAllProfilesRequest,
  searchProfilesRequest
} from "../services/api";

/*All*/
const ajaxLoading = () => {
  return {
    type: types.FETCH_ALL_PROFILES_PENDING
  };
};

const ajaxSuccess = payload => {
  return {
    type: types.FETCH_ALL_PROFILES_FULFILLED,
    payload
  };
};

const ajaxFailure = () => {
  return {
    type: types.FETCH_ALL_PROFILES_REJECTED
  };
};

/*Search*/
const ajaxSearchLoading = () => {
  return {
    type: types.SEARCH_PENDING
  };
};

const ajaxSearchSuccess = userInput => {
  return {
    type: types.SEARCH_FULFILLED,
    userInput
  };
};

const ajaxSearchFailure = () => {
  return {
    type: types.SEARCH_REJECTED
  };
};

export const fetchAllProfiles = () => {
  return dispatch => {
    dispatch(ajaxLoading());
    fetchAllProfilesRequest()
      .then(response => dispatch(ajaxSuccess(response)))
      .catch(() => dispatch(ajaxFailure()));
  };
};

export const searchProfiles = searchInput => {
  return dispatch => {
    dispatch(ajaxSearchLoading());
    searchProfilesRequest(searchInput)
      .then(() => dispatch(ajaxSearchSuccess(searchInput)))
      .catch(() => dispatch(ajaxSearchFailure()));
  };
};
