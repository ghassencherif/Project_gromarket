import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import userReducer from "./userReducer";
import surveyReducer from "./surveyReducer";
import marketReducer from "./marketReducer";

export default combineReducers({
  error: errorReducer,
  user: userReducer,
  surveyAll: surveyReducer,
  markets: marketReducer,
});
