import { combineReducers } from "redux";
import auth from "./user/userReducer";

export const rootReducer = combineReducers({
  userReducer: auth,
});
