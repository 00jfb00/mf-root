import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";
import userReducer from "./user/UserReducer";
import userAction from "./user/UserAction";

let authReducer = combineReducers({
  user: userReducer
});
const authAction = {
  user: userAction
};
authReducer = persistReducer(
  {
    key: "auth",
    storage,
    whitelist: ["user"],
    blacklist: []
  },
  authReducer
);
export { authReducer, authAction };
