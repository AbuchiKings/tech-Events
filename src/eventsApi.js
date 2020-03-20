import events from './data';

export function getFeaturedEvents(){
    return events.filter(event => event.featured);
}