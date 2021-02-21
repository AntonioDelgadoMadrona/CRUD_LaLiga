// ACTION / TYPES
import * as types from './types';
import * as apiStatus from '../apiStatusActions/apiStatusActions';
import * as alertActions from '../alertActions/alertActions';

// SERVICES
import * as userService from '../../../services/userService/userService';

// TYPES
import { Dispatch } from 'redux';
import { IUser } from '../../../interfaces/IUser';

// UTILS
import { history } from '../../../utils/history';

// GET USER LIST
export function getUserListAction(data: any) {

    return async function (dispatch: Dispatch) {

        dispatch(request());
        dispatch(apiStatus.apiCallRequest());

        await userService.getUserList(data)
            .then(response => {                
                dispatch(success(response));
                dispatch(apiStatus.apiCallSuccess());
            })
            .catch(() => {
                dispatch(failure());
                dispatch(apiStatus.apiCallError());
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
        dispatch(apiStatus.apiCallRequest());

        await userService.getUserDetails(id)
            .then(response => {
                dispatch(success(response.data));
                dispatch(apiStatus.apiCallSuccess());
            })
            .catch(() => {
                dispatch(failure());
                dispatch(apiStatus.apiCallError());
                dispatch(alertActions.showToastAction({ message: "Hubo un problema, vuelta a intentarlo", type: "ERROR"}));
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
        dispatch(apiStatus.apiCallRequest());

        await userService.deleteUser(id)
            .then(response => {
                dispatch(success());
                dispatch(apiStatus.apiCallSuccess());
                dispatch(alertActions.showToastAction({ message: "Usuario eliminado", type: "SUCCESS"}));
                history.push("/users");
            })
            .catch(error => {
                dispatch(failure());
                dispatch(apiStatus.apiCallError());
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
        dispatch(apiStatus.apiCallRequest());

        await userService.updateUser(user)
            .then(response => {
                dispatch(success(user));
                if(callback) callback();
                dispatch(apiStatus.apiCallSuccess());
                dispatch(alertActions.showToastAction({ message: "Usuario actualizado", type: "SUCCESS"}));
            })
            .catch(error => {
                dispatch(failure());
                dispatch(apiStatus.apiCallError());
            });
    };

    function request() { return { type: types.UPDATE_USER_REQUEST } };
    function success(payload: IUser) { return { type: types.UPDATE_USER_SUCCESS, payload } };
    function failure() { return { type: types.UPDATE_USER_FAILURE } };
};