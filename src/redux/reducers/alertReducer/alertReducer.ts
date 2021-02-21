// ACTION TYPES
import * as types from "../../actions/alertActions/types";

export default function alertReducer(state = {}, action: any) {
  switch (action.type) {
    // SHOW TOAST
    case types.SHOW_TOAST:
      return {
        ...state,
        toast: {
          color: action.payload.color,
          message: action.payload.message,
        },
      };
    // CLEAR ALERTS
    case types.HIDE_TOAST:
      return {
        ...state,
        toast: {},
      };

    default:
      return { ...state };
  }
};