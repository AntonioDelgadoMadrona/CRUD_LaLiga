// TYPES
import * as types from "../../actions/authActions/types";

// UTILS
import {
  saveUserLocalStorage,
  getUserLocalStorage,
  removeUserLocalStorage,
} from "../../../utils/localStorageUtils";

const user = getUserLocalStorage();

const initialState = {
  email: user ? user.email : "",
  logged: user ? true : false,
};

export default function authReducer(state = initialState, action: any) {
  switch (action.type) {
    // LOGIN
    case types.LOGIN_REQUEST:
      return { ...state, gettingUserList: true };
    case types.LOGIN_SUCCESS:
      const { user, token } = action.payload;
      return {
        ...state,
        email: saveUserLocalStorage(user, token),
        logged: true,
        gettingUserList: false,
      };
    case types.LOGIN_FAILURE:
      return { ...state, gettingUserList: false };
    // LOGOUT
    case types.LOGOUT_REQUEST:
      return { ...state, logged: false, email: removeUserLocalStorage() };

    default:
      return { ...state };
  }
}
