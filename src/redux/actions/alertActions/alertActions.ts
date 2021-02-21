// ACTION TYPES
import * as types from "./types";

// SHOW TOAST
export function showToastAction(message: string, color: number) {
  return { type: types.SHOW_TOAST, payload: { message, color } };
};

// HIDE TOAST
export function hideToastAction() {
  return { type: types.HIDE_TOAST };
};
