import { combineReducers } from "redux";
import modal from "./modal";
import auth from "./auth";
import mailCheck from "./mailCheck";
import events from "./events";
import { connectRouter } from "connected-react-router";

const rootReducer = (history) =>
  combineReducers({
    modal,
    auth,
    mailCheck,
    events,
    router: connectRouter(history),
  });
export default rootReducer;
