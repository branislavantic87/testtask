import { combineReducers } from "redux";
import BottomNavigationReducer from "./BottomNavigationReducer";
import LoginReducer from "./LoginReducer";

export default combineReducers({
    loginReducer: LoginReducer,
    bottomNavReducer: BottomNavigationReducer
})