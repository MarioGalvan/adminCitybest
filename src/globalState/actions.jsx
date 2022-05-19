import * as types from "./types";

export function setPeriod(period) {
  return { type: types.SET_PERIOD, payload: period };
}

