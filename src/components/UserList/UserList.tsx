// DEPENDENCIES
import React, { useEffect } from "react";

// REDUX
import { connect } from "react-redux";
import { getUserListAction } from "../../redux/actions/userActions/userActions";

const UserList: React.FC = React.memo((props: any) => {

    const { getUserListAction, userList, gettingUserList } = props;

    useEffect(() => {
        getUserListAction();
    }, []);

    return (
        <div>
            <h2>UserList</h2>
        </div>
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
