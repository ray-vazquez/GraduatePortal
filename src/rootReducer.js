import {
  combineReducers
} from "redux";
import LoginReducer from "./components/Login/LoginReducer";
import sharedReducer from "./sharedReducer";
import EditProfileReducer from "./components/EditProfile/EditProfileReducer";
import NewProfileReducer from "./components/NewProfile/NewProfileReducer";

const rootReducer = combineReducers({
  Shared: sharedReducer,
  Login: LoginReducer,
  EditProfile: EditProfileReducer,
  NewProfile: NewProfileReducer
});

export default rootReducer;