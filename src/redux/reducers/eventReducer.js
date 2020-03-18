
export function featuredEventsReducer(state = [], action) {
    switch (action.type) {
        case "LOAD_FEATURED_EVENTS_SUCCESS":
            return action.featuredEvents;
        default:
            return state;
    }
}