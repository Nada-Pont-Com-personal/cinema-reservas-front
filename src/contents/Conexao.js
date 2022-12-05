import axios from "axios";
import qs from "qs";

const instance = axios.create({
  baseURL: "http://localhost:5000",
  paramsSerializer: function (data) {
    return qs.stringify(data, { arrayFormat: "brackets" });
  },
  withCredentials: true,
});

export const post = instance.post;
export const get = instance.get;
