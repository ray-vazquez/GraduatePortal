import {
  combineReducers
} from "redux";
import LoginReducer from "./components/Login/LoginReducer";
import sharedReducer from "./sharedReducer";
import SearchReducer from "./components/Search/SearchReducer";
import EditProfileReducer from "./components/EditProfile/EditProfileReducer";
import NewProfileReducer from "./components/NewProfile/NewProfileReducer";
import ViewProfileReducer from "./components/ViewProfile/ViewProfileReducer";

const rootReducer = combineReducers({
  Shared: sharedReducer,
  Login: LoginReducer,
  Search: SearchReducer,
  EditProfile: EditProfileReducer,
  NewProfile: NewProfileReducer,
  ViewProfile: ViewProfileReducer
});

export default rootReducer;