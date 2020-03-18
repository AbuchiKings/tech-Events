import events from './data';

export function getFeaturedEvents(){
    console.log('called');
    return events.filter(event => event.featured);
}