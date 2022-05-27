import * as types from "./types";

const initialState = {
  period: "mensual",
  countryByMark: "Todos",
  countryByHotel: "Todos",
  countryByVehicle: "Todos",
};

export default function carbonFootPrintReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_PERIOD:
      return {
        ...state,
        period: action.payload,
      };
    case types.SET_COUNTRY_BY_MARK:
      return {
        ...state,
        countryByMark: action.payload,
      };
    case types.SET_COUNTRY_BY_HOTEL:
      return {
        ...state,
        countryByHotel: action.payload,
      };
    case types.SET_COUNTRY_BY_VEHICLE:
      return {
        ...state,
        countryByVehicle: action.payload,
      };

    default:
      return state;
  }
}
