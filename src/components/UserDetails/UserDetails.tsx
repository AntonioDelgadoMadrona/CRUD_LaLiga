// DEPENDENCIES
import React, { useEffect, useState } from "react";
import queryString from "querystring";
import { Link } from "react-router-dom";

// REDUX
import { connect } from "react-redux";
import { getUserDetailsAction } from "../../redux/actions/userActions/userActions";

// COMPONENTS
import { DetailsForm } from "./DetailsForm/DetailsForm";
import { Modal } from "../generic/Modal/Modal";

// UTILS
import { isEqual } from "lodash";
import { validateEmailAddress } from "../../utils/validations";

// STYLED
import { StyledUserDetails as Container, ModalContent } from "./styled";
import { Button } from "../generic/Button/Button";

interface IProps {
  getUserDetailsAction: any;
  userId: any;
  userDetails: any;
  gettingUserDetails: boolean;
}

const UserDetails = React.memo<IProps>((props) => {
  const { getUserDetailsAction, userId, userDetails, gettingUserDetails } = props;

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    avatar: "",
    id: "",
  };

  const [user, setUser] = useState(initialState);
  const [modal, setModal] = useState({ delete: false, update: false });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getUserDetailsAction(userId);
  }, [getUserDetailsAction, userId]);

  useEffect(() => {
    if (userDetails) setUser((prevUser) => ({ ...prevUser, ...userDetails }));
  }, [userDetails]);

  // SET PROPERTY BY NAME
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // UPDATE THE USER
  const handleClick = (handler: string) => {
    if (handler === "update") {
      if (!validateForm()) return;
      setModal({ update: true, delete: false });
    } else if (handler === "delete") setModal({ update: false, delete: true });
  };

  // CHECKS THE DIFFERENT INPUTS
  const validateForm = () => {
    let errors: any = {};
    const { firstName, lastName, email } = user;

    if (!firstName) errors.firstName = "No puede estar vacío";
    else if (firstName.length < 3) errors.firstName = "Mínimo 3 caracteres";

    if (!lastName) errors.lastName = "No puede estar vacío";
    else if (lastName.length < 3) errors.lastName = "Mínimo 3 caracteres";

    if (!email) errors.email = "No puede estar vacío";
    else if (!validateEmailAddress(email)) errors.email = "Email no válido";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  // DETECT IF SOME INFO CHANGED
  let updated = false;
  if (!isEqual(user, userDetails)) updated = true;

  return (
    <Container>
      <Link to="/users">Atras</Link>
      <h2>User Details</h2>
      <div>
        {userDetails && (
          <DetailsForm
            user={user}
            handleChange={handleChange}
            handleClick={handleClick}
            errors={errors}
            isLoading={false}
            updated={updated}
          />
        )}
      </div>

      {/* UPDATE MODAL */}
      <Modal show={modal.update} modalClosed={() => setModal({ delete: false, update: false })}>
        <ModalContent>
          <strong>¿Estas seguro de que quiere actualizar este usuario?</strong>
          <div>
            <Button
              color="danger"
              size="medium"
              outline={false}
              onClick={() => setModal({ delete: false, update: false })}
            >
              Cancelar
            </Button>

            <Button
              color="primary"
              size="medium"
              outline={false}
              onClick={() => setModal({ delete: false, update: false })}
            >
              Actualizar
            </Button>
          </div>
        </ModalContent>
      </Modal>

      {/* DELETE MODAL  */}
      <Modal show={modal.delete} modalClosed={() => setModal({ delete: false, update: false })}>
        <ModalContent>
          <strong>¿Estas seguro de que quiere eliminar este usuario?</strong>
          <div>
            <Button
              color="primary"
              size="medium"
              outline={false}
              onClick={() => setModal({ delete: false, update: false })}
            >
              Cancelar
            </Button>

            <Button
              color="danger"
              size="medium"
              outline={false}
              onClick={() => setModal({ delete: false, update: false })}
            >
              Eliminar
            </Button>
          </div>
        </ModalContent>
      </Modal>
    </Container>
  );
});

const mapStateToProps = (state: any, ownProps: any) => {
  const { userReducer } = state;
  const urlFilters = queryString.decode(ownProps.location.search.replace("?", ""));
  return {
    userId: urlFilters.id,
    userDetails: userReducer.userDetails,
    gettingUserDetails: userReducer.gettingUserDetails,
  };
};

const mapDispatchToProps = {
  getUserDetailsAction,
};

export { UserDetails };

const UserDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(UserDetails);

export default UserDetailsContainer;
