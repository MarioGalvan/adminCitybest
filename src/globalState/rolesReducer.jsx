import * as types from "./types";

const initialState = {
  currentRol: {},
};

export default function rolesReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_CURRENT_ROL:
      return {
        ...state,
        currentRol: action.payload,
      };
    case types.CLEAR_CURRENT_ROL:
      return {
        ...state,
        currentRol: action.payload,
      };
    default:
      return state;
  }
}
