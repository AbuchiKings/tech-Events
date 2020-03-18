import { combineReducers } from "redux";
import { featuredEventsReducer } from './eventReducer';

const rootReducer = combineReducers({
    featuredEvents: featuredEventsReducer
});

export default rootReducer;