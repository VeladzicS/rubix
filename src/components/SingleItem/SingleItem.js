import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../context";
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
} from "./SingleItems.elements";
import { override } from "../../globalStyles";

import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../config";

const SingleItem = () => {
  let videoTrailer = "";
  const { item, id } = useParams();
  const [singleShow, setSingleShow] = useState({});
  const [trailer, setTrailer] = useState({});

  const { isLoading, setIsLoading } = useGlobalContext();

  //Function for fetching single movie or tv show.

  const fetchMovie = async (url) => {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setSingleShow(data);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  //Function for fetching trailer for single movie or show. Could not find reffrence for it in fetchMovie return.

  const fetchTrailer = async (url) => {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setTrailer(data.results);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

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
  if (isLoading) {
    return (
      <PulseLoader css={override} size={50} color={"var(--clr-primary-5)"} />
    );
  }

  return (
    <SingleItemDiv>
      <SingleItemNav to="/">
        <BackIcon /> Back
      </SingleItemNav>

      {videoTrailer ? (
        <ReactPlayer
          width="100%"
          height="100%"
          url={`https://www.youtube.com/watch?v=${videoTrailer}`}
        />
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
          <h2>Description:</h2> {overview}
        </SingleItemDesc>
      </SingleItemItemsDiv>
    </SingleItemDiv>
  );
};

export default SingleItem;
