// DEPENDENCIES
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

// ACTIONS
import * as actions from './authActions';
import * as authService from '../../../services/authService/authService';

// CONFIG
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
console.error = jest.fn();

describe('getAllPoolBetsAction', () => {

    let store;
    beforeEach(() => {
        store = mockStore({});
    });

    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    test('should complete successfully', async () => {

        const mockUser = { email: 'charles.morris@reqres.in', password: '12345' };
        const response = { token: 'abcdefgd' };

        fetchMock.mock(authService.login(), response);

        const expectedActions = [
            { type: 'LOGIN_REQUEST' },
            { type: 'API_CALL_REQUEST' },
            { type: 'LOGIN_SUCCESS', payload: { user: mockUser, token: response.token } },
            { type: 'API_CALL_SUCCESS' },
            { type: 'SHOW_TOAST', payload: { message: "Has iniciado sesion", type: "SUCCESS" } }
        ];

        await store.dispatch(actions.loginAction(mockUser))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });

    });

    test('should throw an error', async () => {

        const mockUser = { email: 'antonios@hotmail.com', password: '12345' };
        const error = new Error();

        fetchMock.mock(authService.login(), { throws: error });

        const expectedActions = [
            { type: 'LOGIN_REQUEST' },
            { type: 'API_CALL_REQUEST' },
            { type: 'LOGIN_FAILURE' },
            { type: 'API_CALL_FAILURE' },
            { type: 'SHOW_TOAST', payload: { message: "Email o contraseña incorrectos", type: "ERROR" } }
        ];

        await store.dispatch(actions.loginAction(mockUser))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });

    });

});