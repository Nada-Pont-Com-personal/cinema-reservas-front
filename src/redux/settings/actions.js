import { LOGIN, LOGOUT } from "../constants";

export const login = (locale) => {
  return {
    type: LOGOUT,
    payload: locale,
  };
};

export const logout = (locale) => {
  return {
    type: LOGIN,
    payload: locale,
  };
};
