// DEPENDENCIES
import React, { useEffect, useState } from "react";

// REDUX
import { connect } from "react-redux";
import { getUserListAction } from "../../redux/actions/userActions/userActions";

// COMPONENTS
import { Table } from "../generic/Table/Table";

// UTILS
import { history } from "../../utils/history";
import { IUser } from "../../interfaces/IUser";

// STYLED
import { UserListContainer as Container, StyledAvatarImg } from "./styled";

interface IProps {
  getUserListAction: any;
  userList: IUser[];
  userPagination: {};
}

const headersList = ["Avatar", "Nombre", "Apellido/s", "Email"];

const UserList = React.memo<IProps>((props) => {
  const { getUserListAction, userList, userPagination } = props;

  const initialState = {
    currentPage: 1,
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    getUserListAction(state);
  }, [getUserListAction, state]);

  // RECEIVE THE ORDER OF DIFFERENTS BUTTONS
  const handleButtons = (data: any) => {
    const { handler, id } = data;
    if (handler === "view") history.push({ pathname: "/User", search: `?id=${id}` });
  };

  // CHANGE THE PAGE FROM TABLE
  const handlePage = (selectedPage: number) => {
    setState((prevState) => ({ ...prevState, currentPage: selectedPage }));
  };

  // SAVE THE CORRECT COLLECTION FOR SHOW IN ORDER
  let users: any = [];
  if (userList.length > 0) {
    userList.map((user: any) => {
      const updatedItem = {
        avatar: (
          <StyledAvatarImg>
            <img src={user.avatar} alt={user.first_name}></img>
          </StyledAvatarImg>
        ),
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        id: user.id,
        actionButtons: [
          {
            title: "Ver",
            color: "secondary",
            size: "medium",
            outline: false,
            handler: "view",
          },
        ],
      };
      return (users = [...users, updatedItem]);
    });
  }

  return (
    <Container>
      <h2>Listado de Usuarios</h2>
      <Table
        headers={headersList}
        items={users}
        handleButtons={handleButtons}
        page={userPagination}
        handlePage={handlePage}
      />
    </Container>
  );
});

const mapStateToProps = (state: any) => {
  const { userReducer } = state;
  return {
    userList: userReducer.userList,
    userPagination: userReducer.userPagination,
  };
};

const mapDispatchToProps = {
  getUserListAction,
};

export { UserList };

const UserListContainer = connect(mapStateToProps, mapDispatchToProps)(UserList);

export default UserListContainer;
