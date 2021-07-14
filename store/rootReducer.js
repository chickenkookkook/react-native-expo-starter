import { combineReducers } from "redux";
import auth from "./user/userReducer";

const rootReducer = combineReducers({
  userReducer: auth,
});

export default rootReducer;
