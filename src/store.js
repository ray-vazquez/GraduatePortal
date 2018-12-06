import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";

/**
 * Allowing you to see Redux actions in your dev tools.
 * @see https://github.com/zalmoxisus/redux-devtools-extension#usage
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk, promiseMiddleware()];
const store = createStore(
  reducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(...middleware))
);

export default store;