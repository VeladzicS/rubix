import React, { useState, useContext, useEffect, useRef } from "react";

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
  const [list, setList] = useState([]);

  //This ref is used to only fetch top rated movies/shows when deleting already typed query letters and not when user first types them.
  const prevQueryRef = useRef();
  useEffect(() => {
    prevQueryRef.current = query;
  });

  const prevQuery = prevQueryRef.current;

  //Function for fetching top 10 shows (movies or tv) based on show State.

  const fetchTopShows = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setList(data.results.slice(0, 10));
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  //Function for fetching movies or tv show based on query State.
  const fetchSearch = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (query.length > 2) {
        setIsLoading(true);
        setList(data.results.slice(0, 10));
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (shows === "tv") {
      fetchTopShows(API_ENDPOINT_TOP_SHOWS);
    }

    if (shows === "movie") {
      fetchTopShows(API_ENDPOINT_TOP_MOVIES);
    }
  }, [shows]);

  useEffect(() => {
    if (shows === "tv" && query.length >= 3) {
      fetchSearch(
        `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&page=1&query=${query}&include_adult=false`
      );
    } else if (shows === "tv" && query.length === 2 && prevQuery.length === 3) {
      fetchTopShows(API_ENDPOINT_TOP_SHOWS);
    }

    if (shows === "movie" && query.length >= 3) {
      fetchSearch(
        `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      );
    } else if (
      shows === "movie" &&
      query.length === 2 &&
      prevQuery.length === 3
    ) {
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
        setIsLoading,
        setQuery,
        setShows,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
