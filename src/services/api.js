import axios from "axios";

const api = "http://localhost:7000";

const send = (url, data = null, method = "GET") => {
  return axios(url, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    data: data ? JSON.stringify(data) : null
  }).then(response => response.data);
};

export const searchProfilesRequest = (searchInput) => {
  return send(api + "/search/" + searchInput);
};
