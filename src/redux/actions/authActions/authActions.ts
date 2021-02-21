// ACTION / TYPES
import * as types from './types';
import * as apiStatus from '../apiStatusActions/apiStatusActions';

// SERVICES
import * as authService from '../../../services/authService/authService';

// TYPES
import { Dispatch } from 'redux';

// UTILS
import { history } from '../../../utils/history';
import { ILoginUser } from '../../../interfaces/ILoginUser';

// LOGIN
export function loginAction(user: ILoginUser) {

    return async function (dispatch: Dispatch) {

        dispatch(request());
        dispatch(apiStatus.apiCallRequest());

        await authService.login(user)
            .then(response => {        
                dispatch(success({ user, token: response.token }));
                dispatch(apiStatus.apiCallSuccess());
                history.replace("/Users");
            })
            .catch(error => {
                dispatch(failure());
                dispatch(apiStatus.apiCallError());
            });
    };

    function request() { return { type: types.LOGIN_REQUEST } };
    function success(payload: any) { return { type: types.LOGIN_SUCCESS, payload } };
    function failure() { return { type: types.LOGIN_FAILURE } };
};

// LOGOUT
export function logoutAction() {
    // history.push("/Login");
    return { type: types.LOGOUT_REQUEST };
};