import * as Action from "./UserAction";
import UserInterface from "../../../interfaces/User";

const initialState = {
  ...new UserInterface({}),
  error: undefined,
  status: undefined,
  type: null
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action._TYPES._getUserInfo:
      return {
        ...state,
        status: action.status,
        type: action.type,
        ...(Action._STATUS._done !== action.status
          ? {}
          : new UserInterface(action.payload)),
        error: action.error
      };
    default:
      return state;
  }
};
export default reducer;
