import React from "react";
import { Nav, NavItem } from "./Navbar.elements";
import { useGlobalContext } from "../../context";

const Navbar = () => {
  const { setShows } = useGlobalContext();
  return (
    <Nav>
      <NavItem value="movie" onClick={(e) => setShows(e.target.value)}>
        Movies
      </NavItem>
      <NavItem value="tv" onClick={(e) => setShows(e.target.value)}>
        TV Shows
      </NavItem>
    </Nav>
  );
};

export default Navbar;
