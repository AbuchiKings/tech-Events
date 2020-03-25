import events from './data';

export function getFeaturedEvents() {
    debugger;
    return events.filter(event => event.featured);


}
export function getEvents() {
    return events;
}