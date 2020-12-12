import React, { useReducer } from "react";
import rubixContext from "./rubixContext";
import rubixReducer from "./rubixReducer";
import axios from "axios";
import {
  SET_LOADING,
  SET_SHOWS,
  SET_QUERY,
  SET_TEMP_QUERY,
  GET_TOP_SHOWS,
  SEARCH_SHOWS,
} from "../types";

const RubixState = (props) => {
  let initalShow = "tv";

  const initialState = {
    shows: initalShow,
    query: "",
    tempQueryValue: "",
    list: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(rubixReducer, initialState);

  //GET TOP SHOWS
  const fetchTopShows = async (url) => {
    setIsLoading();
    const res = await axios.get(url);
    dispatch({
      type: GET_TOP_SHOWS,
      payload: res.data.results.slice(0, 20),
    });
  };

  //SEARCH SHOWS
  const fetchSearch = async (url) => {
    setIsLoading();
    const res = await axios.get(url);
    dispatch({
      type: SEARCH_SHOWS,
      payload: res.data.results.slice(0, 20),
    });
  };
  //SET LOADING

  const setIsLoading = () => dispatch({ type: SET_LOADING });

  //SET_SHOWS
  const setShows = (e) =>
    dispatch({ type: SET_SHOWS, payload: e.target.value });

  //SET_TEMP_QUERY

  const setTempQueryValue = (newValue) =>
    dispatch({ type: SET_TEMP_QUERY, payload: newValue });

  //SET_QUERY

  const setQuery = (newValue) =>
    dispatch({ type: SET_QUERY, payload: newValue });

  return (
    <rubixContext.Provider
      value={{
        shows: state.shows,
        query: state.query,
        tempQueryValue: state.tempQueryValue,
        list: state.list,
        loading: state.loading,
        fetchTopShows,
        setShows,
        setQuery,
        setTempQueryValue,
        fetchSearch,
      }}
    >
      {props.children}
    </rubixContext.Provider>
  );
};

export default RubixState;
