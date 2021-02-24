// UTILS
import { getUserLocalStorage } from "../../utils/localStorageUtils";

export default function loggedMiddleware({ dispatch }) {
  return (next) => (action) => {
    // IF THE APP EXECUTE A REQUEST INFO, CHECKS IF THE USER HAS AUTENTICATION
    // (BY EX: WHEN CLEAR THE LOCASTORAGE)
    if (
      action.type === "GET_USER_LIST_REQUEST" ||
      action.type === "GET_USER_DETAILS_REQUEST"
    ) {
      const user = getUserLocalStorage();
      if (!user) {
        dispatch({ type: "LOGOUT_REQUEST" });
        dispatch({
          type: "SHOW_TOAST",
          payload: { message: "Tu sesión ha expirado", type: "ERROR" },
        });
      }

      return next(action);
    }

    return next(action);
  };
}
