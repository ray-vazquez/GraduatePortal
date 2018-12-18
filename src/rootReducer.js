import { combineReducers } from 'redux';
import LoginReducer from './components/Login/LoginReducer';
import NavBarReducer from './components/NavBar/NavBarReducer';

const rootReducer = combineReducers({
  Login: LoginReducer,
  NavBar: NavBarReducer
});

export default rootReducer;