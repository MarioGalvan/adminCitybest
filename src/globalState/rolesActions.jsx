import * as types from "./types";

export function setCurrentRol(data) {
  return { type: types.SET_CURRENT_ROL, payload: data };
}

export function clearCurrentRol() {
    return { type: types.CLEAR_CURRENT_ROL, payload: {} };
  }
