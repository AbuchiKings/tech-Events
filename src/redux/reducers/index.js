import { combineReducers } from "redux";
import { featuredEventsReducer, eventsReducer } from './eventReducer';

const rootReducer = combineReducers({
    featuredEvents: featuredEventsReducer,
    events: eventsReducer
});

export default rootReducer;