// DEPENDENCIES
import React from "react";

// STYLEd
import { StyledNavbar, ImgContainer, LinksContainer } from "./styled";
import logo from "../../images/logo_navbar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  logged: boolean;
  email: string;
  logoutAction: any;
}

const Navbar = React.memo<IProps>(({ logged, email, logoutAction }) => {
  return (
    <StyledNavbar>
      {/* LOGO */}
      <ImgContainer>
        <img src={logo} alt="laligalogo" />
      </ImgContainer>

      {/* LINKS */}
      <LinksContainer>
        {logged && (
          <ul>
            <li>
              <strong>{email}</strong>
            </li>
            <li>
              <span onClick={logoutAction}>
                <FontAwesomeIcon icon={faSignOutAlt} /> Salir
              </span>
            </li>
          </ul>
        )}
      </LinksContainer>
    </StyledNavbar>
  );
});

export { Navbar };
