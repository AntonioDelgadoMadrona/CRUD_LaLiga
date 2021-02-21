// ACTION TYPES
import * as types from "../../actions/apiStatusActions/types";

export default function apiStatusReducer(state = 0, action: any) {
  switch (action.type) {
    case types.API_CALL_REQUEST:
      return state + 1;
    case types.API_CALL_SUCCESS:
      if (state === 0) return state;
      return state - 1;
    case types.API_CALL_FAILURE:
      if (state === 0) return state;
      return state - 1;

    default:
      return state;
  }
};
