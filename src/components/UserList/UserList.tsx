// DEPENDENCIES
import React, { useEffect } from "react";

// REDUX
import { connect } from "react-redux";
import { getUserListAction } from "../../redux/actions/userActions/userActions";

// COMPONENTS
import { Table } from '../generic/Table/Table';

// STYLED
import { UserListContainer as Container } from './UserList.styles';

const headersList = [
    'Avatar', 'Nombre', 'Apellido/s', 'Email'
];

const UserList: React.FC = React.memo((props: any) => {

    const { getUserListAction, userList, gettingUserList } = props;

    useEffect(() => {
        getUserListAction();
    }, []);

    // SAVE THE CORRECT COLLECTION FOR SHOW IN ORDER
    let users: any = [];
    if (userList.length > 0) {
        userList.map((user: any) => {
            const updatedItem = {
                avatar: <img src={user.avatar} alt={user.first_name}></img>,
                firstName: user.first_name,
                lastName: user.last_name,
                email: user.email,
                id: user.id,
                actionButtons: [
                    { title: 'Ver más', color: 'secondary', size: 'small', outline: true, handler: 'view' }
                ]
            };
            return users = [...users, updatedItem];
        })
    };

    return (
        <Container>
            <h2>User List</h2>
            <Table
                headers={headersList}
                items={users}
            />
        </Container>
    );
});

const mapStateToProps = (state: any) => {
    const { userReducer } = state;
    return {
        userList: userReducer.userList,
        gettingUserList: userReducer.gettingUserList,
    };
};

const mapDispatchToProps = {
    getUserListAction,
};

export { UserList };

const UserListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);

export default UserListContainer;
