import axios from "axios";

const api = "http://????";

const send = (url, data = null, method = "POST") => {
  const token = localStorage.getItem("token");
  return axios(url, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : ""
    },
    data: data ? JSON.stringify(data) : null
  }).then(response => response.data);
};

export const loginRequest = (username, password) => {
  return send(`${api}/login`, { username, password }).then(response => {
    if (response.token) localStorage.token = response.token;
    return response;
  });
};

export const fetchAllProfilesRequest = () => {
  return send(`${api}/search`, null, "GET");
};

export const searchProfilesRequest = userInput => {
  return send(`${api}/search/${userInput}`, { userInput }).then(response => {
    if (response.data && response.data.profiles && response.data.profiles > 0)
      return response;
  });
};
