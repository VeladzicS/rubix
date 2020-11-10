import React, { useReducer } from "react";
import singleItemContext from "./singleItemContext";
import singleItemReducer from "./singleItemReducer";
import axios from "axios";
import { SET_TRAILER, SET_SINGLE_SHOW, SET_LOADING } from "../types";

const SingleItemState = (props) => {
  const initialState = {
    singleShow: {},
    trailer: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(singleItemReducer, initialState);

  //SET_TRAILER
  const fetchTrailer = async (url) => {
    setIsLoading();
    const res = await axios.get(url);
    dispatch({
      type: SET_TRAILER,
      payload: res.data.results,
    });
  };
  //SET_SINGLE_SHOW

  const fetchMovie = async (url) => {
    setIsLoading();
    const res = await axios.get(url);
    dispatch({
      type: SET_SINGLE_SHOW,
      payload: res.data,
    });
  };

  //SET LOADING

  const setIsLoading = () => dispatch({ type: SET_LOADING });

  return (
    <singleItemContext.Provider
      value={{
        trailer: state.trailer,
        singleShow: state.singleShow,
        loading: state.loading,
        setIsLoading,
        fetchTrailer,
        fetchMovie,
      }}
    >
      {props.children}
    </singleItemContext.Provider>
  );
};

export default SingleItemState;
