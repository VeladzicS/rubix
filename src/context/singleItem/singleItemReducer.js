import { SET_SINGLE_SHOW, SET_TRAILER, SET_LOADING } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_TRAILER:
      return {
        ...state,
        trailer: action.payload,
        loading: false,
      };
    case SET_SINGLE_SHOW:
      return {
        ...state,
        singleShow: action.payload,
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
