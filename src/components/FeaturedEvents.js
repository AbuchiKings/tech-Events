import React from 'react'
import PropTypes from 'prop-types';
import Title from './Title';
import SingleEvent from './SingleEvent';
import { Link } from 'react-router-dom';

function FeaturedEvents({ featuredEvents }) {

    return (
        <section className="featured-events">
            <Title title="featured events" />
            <div className="featured-events-center">
                {featuredEvents.map(event => {
                    return <SingleEvent data={event} key={event.id} />
                })}
                
            <i aria-hidden="true"></i>
            <i aria-hidden="true"></i>
            <i aria-hidden="true"></i>
            <i aria-hidden="true"></i>
            </div>
            <Link to="/events" className="more btn-primary"> See More</Link>
        </section>
    )
}


FeaturedEvents.propTypes = {
    featuredEvents: PropTypes.array.isRequired
}


export default FeaturedEvents;