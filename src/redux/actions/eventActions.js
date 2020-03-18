import * as eventsApi from './../../eventsApi';

export function getFeaturedEventsSuccess(featuredEvents) {
    return { type: "LOAD_FEATURED_EVENTS_SUCCESS", featuredEvents: featuredEvents }
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

