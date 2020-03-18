import React from 'react'
import { connect } from 'react-redux';
import { useEffect } from 'react';
import * as eventActions from '../redux/actions/eventActions';
import PropTypes from 'prop-types';
import Title from './Title';
import SingleEvent from './SingleEvent';
import { Link } from 'react-router-dom';

function FeaturedEvents({ dispatch, featuredEvents }) {

    useEffect(() => {
        if (featuredEvents.length === 0) {
            dispatch(eventActions.getFeaturedEvents());
        }
    });
    console.log(featuredEvents)

    return (
        <section className="featured-events">
            <Title title="featured events" />
            <div className="featured-events-center">
                {featuredEvents.map(event => {
                    return <SingleEvent data={event} key={event.id} />
                })}
            </div>
            <Link to="/events" className="more btn-primary"> See More</Link>
        </section>
    )
}


FeaturedEvents.propTypes = {
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        featuredEvents: state.featuredEvents
    }
}
export default connect(mapStateToProps)(FeaturedEvents)