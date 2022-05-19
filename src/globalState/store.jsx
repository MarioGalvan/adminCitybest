import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import carbonFootPrintReducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
  carbonFootPrint: carbonFootPrintReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
