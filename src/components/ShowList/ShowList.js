import React from "react";
import { PulseLoader } from "react-spinners";
import {
  MovieListContainer,
  SingleShow,
  SingleShowImg,
  SingleShowTitle,
} from "./ShowList.elements";
import { override } from "../../globalStyles";

import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";

const MovieList = () => {
  const { list, isLoading, shows } = useGlobalContext();

  return (
    <MovieListContainer>
      {isLoading ? (
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
                      : "http://via.placeholder.com/400x600?text=No+Cover+Image+Available"
                  }
                  alt="Featured Image"
                />
                <SingleShowTitle>{title ? title : name}</SingleShowTitle>
              </SingleShow>
            </Link>
          );
        })
      )}
    </MovieListContainer>
  );
};

export default MovieList;
