import React, { useEffect, useContext } from "react";
import { PulseLoader } from "react-spinners";
import RubixContext from "../../context/rubix/rubixContext";
import {
  MovieListContainer,
  SingleShow,
  SingleShowImg,
  SingleShowTitle,
  EmptySearchMessage,
  SingleShowTitleDiv,
} from "./ShowList.elements";
import { override } from "../../globalStyles";
import { Link } from "react-router-dom";
import {
  API_KEY,
  API_ENDPOINT_TOP_MOVIES,
  API_ENDPOINT_TOP_SHOWS,
  API_URL,
} from "../../config";

const MovieList = () => {
  const rubixContext = useContext(RubixContext);
  const {
    shows,
    loading,
    query,
    list,
    tempQueryValue,
    fetchTopShows,
    fetchSearch,
  } = rubixContext;

  useEffect(() => {
    if (shows === "tv" && query.length < 3) {
      fetchTopShows(API_ENDPOINT_TOP_SHOWS);
    }

    if (shows === "movie" && query.length < 3) {
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

  if (query !== tempQueryValue) {
    return (
      <MovieListContainer>
        <PulseLoader css={override} size={50} color={"var(--clr-primary-5)"} />
      </MovieListContainer>
    );
  }

  if (list.length === 0) {
    return (
      <MovieListContainer>
        <EmptySearchMessage>
          No items match your search parameters.
        </EmptySearchMessage>
      </MovieListContainer>
    );
  }

  return (
    <MovieListContainer>
      {loading ? (
        <PulseLoader css={override} size={50} color={"var(--clr-primary-5)"} />
      ) : (
        list.map((list) => {
          const { poster_path, title, name, id } = list;

          return (
            <Link to={`single/${shows}/${id}`} key={id} className="movie">
              <SingleShow>
                <SingleShowImg
                  src={
                    poster_path !== null
                      ? `https://image.tmdb.org/t/p/original/${poster_path}`
                      : "https://via.placeholder.com/400x600?text=No+Cover+Image+Available"
                  }
                  alt="Featured Image"
                />
                <SingleShowTitleDiv>
                  {" "}
                  <SingleShowTitle> {title ? title : name}</SingleShowTitle>
                </SingleShowTitleDiv>
              </SingleShow>
            </Link>
          );
        })
      )}
    </MovieListContainer>
  );
};

export default MovieList;
