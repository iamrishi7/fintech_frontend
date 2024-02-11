import { API_BASE_URL } from "./constants";
import Cookies from "js-cookie";

const getToken = () => {
  let token;
  if (Cookies.get("token")) {
    token = Cookies.get("token");
  } else if (sessionStorage.getItem("token")) {
    token = sessionStorage.getItem("token");
  } else {
    token = localStorage.getItem("token");
  }
  return token;
}; // not working

const store = { token: getToken() };

const REACT_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || API_BASE_URL;
// const X_API_KEY = process.env.REACT_APP_X_API_KEY;

/**
 * API service methods to make life easier
 */
export const API = {
  /**
   * Execute a query
   * @param url
   * @param method
   * @param body
   * @returns
   */
  execute: async (url, method = "GET", data = null, withToken = true) => {
    let body = null;
    let value = null;
    if (data) {
      body = new FormData();
      for (const key in data) {
        // console.log({ key: key, value: data[key], type: typeof (data[key]) });
        value = data[key];
        if (typeof value == "object") {
          var fileURI = value.path;
          let filename = fileURI?.split("/").pop();
          body.append("image", {
            uri: fileURI,
            name: filename,
            type: value.mime,
            mime: value.mime,
          });
          // console.log(filename);
        } else {
          body.append(key, data[key]);
        }
        body.append(key, data[key]);
      }
    }
    // console.log({ body, data });
    // let token = store.getState().auth.token;
    let token = store.token;
    if (!token) {
      token = localStorage.getItem("token");
    }

    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    if (token && withToken) {
      headers.Authorization = `Bearer ${token}`;
    }

    let res = await fetch(`${REACT_API_BASE_URL}${url}`, {
      method: method,
      headers,
      body: data ? JSON.stringify(data) : null,
    });

    return Promise.all([res.status, res.json(), res.ok]);
  },

  /**
   * Process the response after the query has been executed
   * @param res
   * @returns
   */
  processResponse: (res) => {
    if (!res[2]) {
      console.error({ error: res });
      // throw new Error(res[1]?.error);
      throw new Error(`Err while processing request`);
    }
    return res[1];
  },

  // Actual APIs

  signup: async (data) => {
    let res = await API.execute(`/register`, "POST", data, false);
    return API.processResponse(res);
  },

  login: async (data) => {
    let res = await API.execute(`/login`, "POST", data, false);
    return API.processResponse(res);
  },

  me: async () => {
    let res = await API.execute(`/auth/user`, "GET");
    return API.processResponse(res);
  },

  overview: async (id) => {
    let res = await API.execute(`/overview/${id}`, "GET");
    return API.processResponse(res);
  },

  updateMe: async (data) => {
    let res = await API.execute("/users/update/me", "PUT", data);
    return API.processResponse(res);
  },
};
