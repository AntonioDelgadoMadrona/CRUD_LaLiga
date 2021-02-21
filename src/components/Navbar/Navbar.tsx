// DEPENDENCIES
import React from "react";

// STYLEd
import { StyledNavbar, ImgContainer, LinksContainer } from "./styled";
import logo from "../../images/logo_navbar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = React.memo((props) => {
  return (
    <StyledNavbar>
      {/* LOGO */}
      <ImgContainer>
        <img src={logo} alt="laligalogo" />
      </ImgContainer>

      {/* LINKS */}
      <LinksContainer>
        <ul>
          <li>
            <Link to="/login">
              <FontAwesomeIcon icon={faSignInAlt} /> Login
            </Link>
          </li>
          <li>USERNAME</li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </Link>
          </li>
        </ul>
      </LinksContainer>
    </StyledNavbar>
  );
});

export { Navbar };
