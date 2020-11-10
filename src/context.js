import React, { useState, useContext, useEffect } from "react";

import {
  API_KEY,
  API_ENDPOINT_TOP_MOVIES,
  API_ENDPOINT_TOP_SHOWS,
  API_URL,
} from "./config";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  let initalShow = "tv";

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [shows, setShows] = useState(initalShow);
  const [query, setQuery] = useState("");
  const [tempQueryValue, setTempQueryValue] = useState("");
  const [list, setList] = useState([]);

  //Function for fetching top 10 shows (movies or tv) based on Shows state.

  const fetchTopShows = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setList(data.results.slice(0, 10));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  //Function for fetching movies or tv show based on Query and Show state.

  const fetchSearch = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (query.length > 2) {
        setIsLoading(true);
        setList(data.results.slice(0, 10));
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
      setIsLoading(false);
    }
  };

  //Fetching either TV SHOWS or Movies based on Shows state change.

  useEffect(() => {
    if (shows === "tv") {
      fetchTopShows(API_ENDPOINT_TOP_SHOWS);
    }

    if (shows === "movie") {
      fetchTopShows(API_ENDPOINT_TOP_MOVIES);
    }
  }, [shows]);

  //Searching for TV SHOWS or MOVIES if the Query length is 3 or bigger based on Query and Shows state change.

  useEffect(() => {
    if (shows === "tv" && query.length >= 3) {
      fetchSearch(
        `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&page=1&query=${query}&include_adult=false`
      );
    } else if (shows === "tv" && query.length <= 2) {
      fetchTopShows(API_ENDPOINT_TOP_SHOWS);
    }

    if (shows === "movie" && query.length >= 3) {
      fetchSearch(
        `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      );
    } else if (shows === "movie" && query.length <= 2) {
      fetchTopShows(API_ENDPOINT_TOP_MOVIES);
    }
  }, [query, shows]);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        isError,
        list,
        query,
        shows,
        tempQueryValue,
        setTempQueryValue,
        setIsLoading,
        setQuery,
        setShows,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
