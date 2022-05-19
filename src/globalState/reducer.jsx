import * as types from "./types";

const initialState = {
  period: "mensual",
};

export default function carbonFootPrintReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_PERIOD:
      return {
        ...state,
        period: action.payload,
      };
    default:
      return state;
  }
}
