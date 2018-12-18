import axios from "axios";
import config from "../config";
console.log(config);

/**
 * Import using config.apiUrl
 * @example const api = `${config.apiUrl}api`;
 */

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
