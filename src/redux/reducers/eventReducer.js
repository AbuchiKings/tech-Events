import * as types from '../actions/actionTypes'
import initialState from './initialState';

export function featuredEventsReducer(state = initialState.featuredEvents, action) {
    switch (action.type) {
        case types.GET_FEATURED_EVENTS_SUCCESS:
            return action.featuredEvents;
        default:
            return state;
    }
}

export function eventsReducer(state = initialState.events, action) {
    switch (action.type) {
        case types.GET_EVENTS_SUCCESS:
            console.log(action.actionevents)
            return action.events;
        default:
            return state;
    }
}
