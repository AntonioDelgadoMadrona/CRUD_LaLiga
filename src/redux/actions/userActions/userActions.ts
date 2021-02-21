// TYPES
import * as types from './types';

// SERVICES
import * as userService from '../../../services/userService/userService';

// TYPES
import { Dispatch } from 'redux';

// UTILS
import { history } from '../../../utils/history';
import { IUser } from '../../../interfaces/IUser';

// GET USER LIST
export function getUserListAction(data: any) {

    return async function (dispatch: Dispatch) {

        dispatch(request());

        await userService.getUserList(data)
            .then(response => {                
                dispatch(success(response));
            })
            .catch(error => {
                dispatch(failure());
            });
    };

    function request() { return { type: types.GET_USER_LIST_REQUEST } };
    function success(payload: any) { return { type: types.GET_USER_LIST_SUCCESS, payload } };
    function failure() { return { type: types.GET_USER_LIST_FAILURE } };
};

// GET AN USER BY ID
export function getUserDetailsAction(id: string) {

    return async function (dispatch: Dispatch) {

        dispatch(request());

        await userService.getUserDetails(id)
            .then(response => {
                dispatch(success(response.data));
            })
            .catch(error => {
                dispatch(failure());
            });
    };

    function request() { return { type: types.GET_USER_DETAILS_REQUEST } };
    function success(payload: any) { return { type: types.GET_USER_DETAILS_SUCCESS, payload } };
    function failure() { return { type: types.GET_USER_DETAILS_FAILURE } };
};

// DELETE AN USER BY ID
export function deleteUserAction(id: string) {

    return async function (dispatch: Dispatch) {

        dispatch(request());

        await userService.deleteUser(id)
            .then(response => {
                dispatch(success());
                history.push("/users");
            })
            .catch(error => {
                dispatch(failure());
            });
    };

    function request() { return { type: types.DELETE_USER_REQUEST } };
    function success() { return { type: types.DELETE_USER_SUCCESS } };
    function failure() { return { type: types.DELETE_USER_FAILURE } };
};

// UPDATE AN USER 
export function updateUserAction(user: IUser, callback: any) {

    return async function (dispatch: Dispatch) {

        dispatch(request());

        await userService.updateUser(user)
            .then(response => {
                dispatch(success(user));
                if(callback) callback();
            })
            .catch(error => {
                dispatch(failure());
            });
    };

    function request() { return { type: types.UPDATE_USER_REQUEST } };
    function success(payload: IUser) { return { type: types.UPDATE_USER_SUCCESS, payload } };
    function failure() { return { type: types.UPDATE_USER_FAILURE } };
};