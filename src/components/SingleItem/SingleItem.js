import React, { useContext, useEffect } from "react";
import SingleItemContext from "../../context/singleItem/singleItemContext";
import { useParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import ReactPlayer from "react-player";
import {
  SingleItemDiv,
  SingleItemNav,
  BackIcon,
  SingleItemImg,
  SingleItemTitle,
  SingleItemDesc,
  SingleItemItemsDiv,
  SingleItemTrailerWrapper,
} from "./SingleItems.elements";
import { overrideSingle } from "../../globalStyles";

import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../config";

const SingleItem = () => {
  const singleItemContext = useContext(SingleItemContext);
  const {
    singleShow,
    trailer,
    fetchMovie,
    fetchTrailer,
    loading,
  } = singleItemContext;

  let videoTrailer = "";

  const { item, id } = useParams();

  useEffect(() => {
    fetchMovie(`${API_URL}${item}/${id}?api_key=${API_KEY}&language=en-US`);
  }, [id]);

  useEffect(() => {
    fetchTrailer(
      `${API_URL}${item}/${id}/videos?api_key=${API_KEY}&language=en-US`
    );
  }, [id]);

  if (trailer.length > 0) {
    videoTrailer = trailer[0].key;
  }

  const { poster_path, title, name, overview } = singleShow;
  if (loading) {
    return (
      <PulseLoader
        css={overrideSingle}
        size={40}
        color={"var(--clr-primary-5)"}
      />
    );
  }

  return (
    <SingleItemDiv>
      <SingleItemNav to="/">
        <BackIcon /> Back
      </SingleItemNav>

      {videoTrailer ? (
        <SingleItemTrailerWrapper>
          <ReactPlayer
            width="100%"
            height="100%"
            url={`https://www.youtube.com/watch?v=${videoTrailer}`}
          />
        </SingleItemTrailerWrapper>
      ) : (
        <SingleItemImg
          src={
            poster_path
              ? `${IMAGE_BASE_URL}${poster_path}`
              : "http://via.placeholder.com/400x600?text=No+Cover+Image+Available"
          }
          alt="Feautered Image"
        />
      )}

      <SingleItemItemsDiv>
        <SingleItemTitle>Title: {title || name}</SingleItemTitle>
        <SingleItemDesc>
          <h2>Description:</h2>
          <p> {overview}</p>
        </SingleItemDesc>
      </SingleItemItemsDiv>
    </SingleItemDiv>
  );
};

export default SingleItem;
