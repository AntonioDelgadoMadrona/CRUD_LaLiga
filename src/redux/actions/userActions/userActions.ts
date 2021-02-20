// TYPES
import * as types from './types';

// SERVICES
import * as userService from '../../../services/userService/userService';
import { Dispatch } from 'redux';

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

    function request() { return { type: types.GET_USER_LIST_REQUEST } }
    function success(payload: Object) { return { type: types.GET_USER_LIST_SUCCESS, payload } }
    function failure() { return { type: types.GET_USER_LIST_FAILURE } }
};