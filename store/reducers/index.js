import { combineReducers } from "redux";
import BottomNavigationReducer from "./BottomNavigationReducer";
import LoginReducer from "./LoginReducer";
import SurveyReducer from "./SurveyReducer";

export default combineReducers({
    loginReducer: LoginReducer,
    bottomNavReducer: BottomNavigationReducer,
    surveyReducer: SurveyReducer
})