/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
import { configureStore } from "@reduxjs/toolkit";
// import { applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export default function confgStore(initialState) {
  const store = configureStore({
    reducer: reducers,
    middleware: middlewares,
    preloadedState: initialState,
  });

  sagaMiddleware.run(sagas);

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require("./reducers");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
