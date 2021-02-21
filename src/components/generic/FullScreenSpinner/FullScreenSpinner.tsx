// DEPENDENCES
import React from "react";

// STYLED
import { StyledFullScreen } from "./styled";
import logo from "../../../images/laliga.png";

const FullScreenSpinner = () => {
  return (
    <StyledFullScreen>
      <div>
        <span>
          <img src={logo} alt="laligaspinner" />
          <br />
          Cargando...
        </span>
      </div>
    </StyledFullScreen>
  );
};

export { FullScreenSpinner };
