/* eslint-disable default-param-last */

import { LOGIN, LOGOUT } from "../constants";

const INIT_STATE = {
  sessao: "convidado",
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, sessao: true, user: action.payload };
    case LOGOUT:
      return { ...state, sessao: action.payload, user: undefined };
    default:
      return { ...state };
  }
};
