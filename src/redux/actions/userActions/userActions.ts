// TYPES
import * as types from './types';

// SERVICES
import * as userService from '../../../services/userService/userService';

// GET USER LIST
export function getUserListAction() {

    return async function (dispatch: any) {

        dispatch(request());

        await userService.getUserList()
            .then(response => {
                dispatch(success(response));
            })
            .catch(error => {
                dispatch(failure());
            });
    };

    function request() { return { type: types.GET_USER_LIST_REQUEST } }
    function success(payload: any) { return { type: types.GET_USER_LIST_SUCCESS, payload } }
    function failure() { return { type: types.GET_USER_LIST_FAILURE } }
};