import {
  SET_LOADING,
  SET_SHOWS,
  SET_QUERY,
  SET_TEMP_QUERY,
  GET_TOP_SHOWS,
  SEARCH_SHOWS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_TOP_SHOWS:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    case SEARCH_SHOWS:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case SET_SHOWS:
      return {
        ...state,
        shows: action.payload,
      };
    case SET_TEMP_QUERY:
      return {
        ...state,
        tempQueryValue: action.payload,
      };
    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };

    default:
      return state;
  }
};
