// TYPES
import * as types from "./types";

// API CALL REQUEST
export function apiCallRequest() {
  return { type: types.API_CALL_REQUEST };
}

// API CALL SUCCESS
export function apiCallSuccess() {
  return { type: types.API_CALL_SUCCESS };
}

// API CALL ERROR
export function apiCallError() {
  return { type: types.API_CALL_FAILURE };
}
