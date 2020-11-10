import React from "react";
import { Nav, NavItem } from "./Navbar.elements";
import { useGlobalContext } from "../../context";

const Navbar = () => {
  const { setShows, shows } = useGlobalContext();
  return (
    <Nav>
      <NavItem
        value="movie"
        onClick={(e) => setShows(e.target.value)}
        className={shows === "movie" ? "active" : ""}
      >
        Movies
      </NavItem>
      <NavItem
        value="tv"
        onClick={(e) => setShows(e.target.value)}
        className={shows === "tv" ? "active" : ""}
      >
        TV Shows
      </NavItem>
    </Nav>
  );
};

export default Navbar;
