import * as types from "./types";

export function setPeriod(period) {
  return { type: types.SET_PERIOD, payload: period };
}

export function setCountryByMark(countryByMark) {
  return { type: types.SET_COUNTRY_BY_MARK, payload: countryByMark };
}

export function setCountryByHotel(countryByHotel) {
  return { type: types.SET_COUNTRY_BY_HOTEL, payload: countryByHotel };
}

export function setCountryByVehicle(countryByVehicle) {
  return { type: types.SET_COUNTRY_BY_VEHICLE, payload: countryByVehicle };
}

