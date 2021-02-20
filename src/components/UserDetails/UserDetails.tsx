// DEPENDENCIES
import React, { useEffect, useState } from "react";
import queryString from "querystring";

// REDUX
import { connect } from "react-redux";
import { getUserDetailsAction } from "../../redux/actions/userActions/userActions";

// COMPONENTS
import { DetailsForm } from "./DetailsForm/DetailsForm";

// UTILS
import { isEqual } from "lodash";

// STYLED
import { StyledUserDetails as Container } from "./styled";

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
    debugger;
    if (handler === "update") setModal({ update: true, delete: false });
    else if (handler === "delete") setModal({ update: false, delete: true });
  };

  // DETECT IF SOME INFO CHANGED
  let updated = false;
  if (!isEqual(user, userDetails)) updated = true;

  return (
    <Container>
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
