import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import userReducer from "./userReducer";
import surveyReducer from "./surveyReducer";

export default combineReducers({
  error: errorReducer,
  user: userReducer,
  surveyAll: surveyReducer,
});
