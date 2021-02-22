// DEPENDENCIES
import React from "react";

// COMPONENTS
import { Input } from "../../generic/Input/Input";
import { Button } from "../../generic/Button/Button";

// STYLED
import { ContainerInput, StyledImg, ContainerButton } from "./styled";

interface IProps {
  user: any;
  handleChange: any;
  handleClick: any;
  errors: any;
  updated: boolean;
}

const DetailsForm = React.memo<IProps>(({ user, errors, handleClick, handleChange, updated }) => {
  return (
    <div>
      <ContainerInput>
        <StyledImg>
          <img src={user.avatar} alt={user.firstName} />
        </StyledImg>

        <Input
          type="text"
          name="firstName"
          label="Nombre"
          onChange={handleChange}
          placeholder=""
          value={user.firstName}
          error={errors.firstName}
          disabled={false}
        />

        <Input
          type="text"
          name="lastName"
          label="Apellido/s"
          onChange={handleChange}
          placeholder=""
          value={user.lastName}
          error={errors.lastName}
          disabled={false}
        />

        <Input
          type="email"
          name="email"
          label="Email"
          onChange={handleChange}
          placeholder=""
          value={user.email}
          error={errors.email}
          disabled={false}
        />
      </ContainerInput>

      <ContainerButton>
        <Button
          color="primary"
          size="medium"
          disabled={!updated}
          onClick={() => handleClick("update")}
          outline={false}
        >
          Actualizar
        </Button>

        <Button color="danger" size="medium" onClick={() => handleClick("delete")} outline={false}>
          Eliminar
        </Button>
      </ContainerButton>
    </div>
  );
});

export { DetailsForm };
