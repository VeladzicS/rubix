import React, { useEffect, useContext } from "react";
import { Nav, NavItem } from "./Navbar.elements";
import RubixContext from "../../context/rubix/rubixContext";
import { API_ENDPOINT_TOP_MOVIES, API_ENDPOINT_TOP_SHOWS } from "../../config";

const Navbar = () => {
  const rubixContext = useContext(RubixContext);

  const { fetchTopShows, shows, setShows } = rubixContext;

  useEffect(() => {
    if (shows === "tv") {
      fetchTopShows(API_ENDPOINT_TOP_SHOWS);
    }

    if (shows === "movie") {
      fetchTopShows(API_ENDPOINT_TOP_MOVIES);
    }
  }, [shows]);

  return (
    <Nav>
      <NavItem
        value="movie"
        onClick={setShows}
        className={shows === "movie" ? "active" : ""}
      >
        Movies
      </NavItem>
      <NavItem
        value="tv"
        onClick={setShows}
        className={shows === "tv" ? "active" : ""}
      >
        TV Shows
      </NavItem>
    </Nav>
  );
};

export default Navbar;
