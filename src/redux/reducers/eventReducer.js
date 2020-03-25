import * as types from '../actions/actionTypes'

export function featuredEventsReducer(state = [], action) {
    switch (action.type) {
        case types.GET_FEATURED_EVENTS_SUCCESS:
            return action.featuredEvents;
        default:
            return state;
    }
}
