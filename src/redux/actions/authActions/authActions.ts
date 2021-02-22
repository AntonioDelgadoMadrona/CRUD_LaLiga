// ACTION / TYPES
import * as types from './types';
import * as apiStatus from '../apiStatusActions/apiStatusActions';
import * as alertActions from '../alertActions/alertActions';

// SERVICES
import * as authService from '../../../services/authService/authService';

// TYPES
import { Dispatch } from 'redux';
import { ILoginUser } from '../../../interfaces/ILoginUser';

// UTILS
import { history } from '../../../utils/history';

// LOGIN
export function loginAction(user: ILoginUser) {

    return async function (dispatch: Dispatch) {

        dispatch(request());
        dispatch(apiStatus.apiCallRequest());

        await authService.login(user)
            .then(response => {    
                dispatch(success({ user, token: response.token }));
                dispatch(apiStatus.apiCallSuccess());
                dispatch(alertActions.showToastAction({ message: "Has iniciado sesion", type: "SUCCESS"}));
                history.replace("/Users");
            })
            .catch(() => {
                dispatch(failure());
                dispatch(apiStatus.apiCallError());
                dispatch(alertActions.showToastAction({ message: "Email o contraseña incorrectos", type: "ERROR"}))
            });
    };

    function request() { return { type: types.LOGIN_REQUEST } };
    function success(payload: any) { return { type: types.LOGIN_SUCCESS, payload } };
    function failure() { return { type: types.LOGIN_FAILURE } };
};

// LOGOUT
export function logoutAction() {

    return function (dispatch: Dispatch) {        
        dispatch(alertActions.showToastAction({ message: "¡Gracias, hasta pronto!", type: "SUCCESS"}));
        dispatch(request());
        history.replace("/login");
    };

    function request() { return { type: types.LOGOUT_REQUEST } };
};