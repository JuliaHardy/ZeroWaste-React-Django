import { combineReducers} from "redux";
import events from './events';
import myEvents from "./myevents";
import auth from './auth';

export default combineReducers({
    events,
    myEvents,
    auth
});