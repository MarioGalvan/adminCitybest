import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import carbonFootPrintReducer from "./carbonFootPrintReducer";
import rolesReducer from "./rolesReducer";
import thunkMiddleware from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "main-root",
  storage,
};

const reducers = combineReducers({
  carbonFootPrint: carbonFootPrintReducer,
  roles: rolesReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);


const Persistor = persistStore(store);

export { Persistor };
export default store;

// export default store;
