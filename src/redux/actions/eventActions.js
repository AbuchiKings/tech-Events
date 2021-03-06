import * as eventsApi from './../../eventsApi';
import * as types from './actionTypes'

export function getFeaturedEventsSuccess(featuredEvents) {
    return { type: types.GET_FEATURED_EVENTS_SUCCESS, featuredEvents: featuredEvents }
}

export function getEventsSuccess(events) {
    return { type: types.GET_EVENTS_SUCCESS, events: events }
}



export function getFeaturedEvents() {
    return (dispatch) => {
        const featuredEvents = eventsApi.getFeaturedEvents()
        return dispatch(getFeaturedEventsSuccess(featuredEvents))

    }
}

export function getEvents() {
    return (dispatch) => {
        const events = eventsApi.getEvents();
        return dispatch(getEventsSuccess(events))
    }
}
// export function getFeaturedEvents() {
//     return function(dispatch) {
//       return eventsApi
//         .getFeaturedEvents()
//         .then(featuredEvents => {
//           dispatch(getFeaturedEventsSuccess(featuredEvents));
//         })
//         .catch(error => {
//           throw error;
//         });
//     };
//   }

