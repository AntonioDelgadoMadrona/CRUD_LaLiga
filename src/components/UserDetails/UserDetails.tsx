// DEPENDENCIES
import React, { useEffect, useState } from "react";
import queryString from "querystring";
import { Link } from "react-router-dom";

// REDUX
import { connect } from "react-redux";
import {
  getUserDetailsAction,
  deleteUserAction,
  updateUserAction,
} from "../../redux/actions/userActions/userActions";

// COMPONENTS
import { DetailsForm } from "./DetailsForm/DetailsForm";
import { Modal } from "../generic/Modal/Modal";
import { Button } from "../generic/Button/Button";

// UTILS
import { isEqual } from "lodash";
import { validateName, validateEmailAddress } from "../../utils/validations";

// STYLED
import { StyledUserDetails as Container, ModalContent } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { ContainerInput } from "./DetailsForm/styled";

interface IProps {
  getUserDetailsAction: Function;
  userId: any;
  userDetails: any;
  isLoading: boolean;
  deleteUserAction: Function;
  updateUserAction: Function;
}

const UserDetails = React.memo<IProps>(
  ({
    getUserDetailsAction,
    userId,
    userDetails,
    isLoading,
    deleteUserAction,
    updateUserAction,
  }) => {
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
      return () => setUser(initialState);
    }, []);

    useEffect(() => {
      setUser((prevUser) => ({ ...prevUser, ...userDetails }));
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
      else if (!validateName(firstName)) errors.firstName = "Nombre no válido";

      if (!lastName) errors.lastName = "No puede estar vacío";
      else if (lastName.length < 3) errors.lastName = "Mínimo 3 caracteres";
      else if (!validateName(lastName)) errors.lastName = "Apellido/s no válido";

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
        <Link to="/users">
          <FontAwesomeIcon icon={faAngleLeft} />
        </Link>
        <h2>Detalles del Usuario</h2>
        <div>
          {userDetails && (
            <DetailsForm
              user={user}
              handleChange={handleChange}
              handleClick={handleClick}
              errors={errors}
              updated={updated}
            />
          )}
          {!userDetails && <ContainerInput></ContainerInput>}
        </div>

        {/* UPDATE MODAL */}
        <Modal show={modal.update} modalClosed={() => setModal({ delete: false, update: false })}>
          <ModalContent>
            <strong>¿Seguro que quiere actualizar este usuario?</strong>
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
                onClick={() =>
                  updateUserAction(user, () => setModal({ delete: false, update: false }))
                }
              >
                Actualizar
              </Button>
            </div>
          </ModalContent>
        </Modal>

        {/* DELETE MODAL  */}
        <Modal show={modal.delete} modalClosed={() => setModal({ delete: false, update: false })}>
          <ModalContent>
            <strong>¿Seguro que quiere eliminar este usuario?</strong>
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
                onClick={() => deleteUserAction(user.id)}
              >
                Eliminar
              </Button>
            </div>
          </ModalContent>
        </Modal>
      </Container>
    );
  }
);

const mapStateToProps = (state: any, ownProps: any) => {
  const { userReducer } = state;
  const urlFilters = queryString.decode(ownProps.location.search.replace("?", ""));
  return {
    userId: urlFilters.id,
    userDetails: userReducer.userDetails
  };
};

const mapDispatchToProps = {
  getUserDetailsAction,
  deleteUserAction,
  updateUserAction,
};

export { UserDetails };

const UserDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(UserDetails);

export default UserDetailsContainer;
