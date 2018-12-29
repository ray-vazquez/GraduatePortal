import { combineReducers } from "redux";
import LoginReducer from "./components/Login/LoginReducer";
import sharedReducer from "./sharedReducer";
import SearchReducer from "./components/Search/SearchReducer";

const rootReducer = combineReducers({
  Shared: sharedReducer,
  Login: LoginReducer,
  Search: SearchReducer
});

export default rootReducer;
