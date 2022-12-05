/* eslint-disable default-param-last */

import { CHANGE_LOCALE } from "../constants";

const INIT_STATE = {};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case CHANGE_LOCALE:
      return { ...state, locale: action.payload };

    default:
      return { ...state };
  }
};
