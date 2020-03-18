import * as eventsApi from './../../eventsApi';
import * as types from './actionTypes'

export function getFeaturedEventsSuccess(featuredEvents) {
    return { type: types.GET_FEATURED_EVENTS_SUCCESS, featuredEvents: featuredEvents }
}

export function getFeaturedEvents() {
    return getFeaturedEventsSuccess(eventsApi.getFeaturedEvents());

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

