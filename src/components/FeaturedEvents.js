import React from 'react'
import { connect } from 'react-redux';
import { useEffect } from 'react';
import * as eventActions from '../redux/actions/eventActions';
import PropTypes from 'prop-types';
import Title from './Title';
import SingleEvent from './SingleEvent';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

function FeaturedEvents({ actions, featuredEvents }) {

    useEffect(() => {
        if (featuredEvents.length === 0) {
            actions.getFeaturedEvents();
        }
    });

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
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        featuredEvents: state.featuredEvents
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(eventActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FeaturedEvents)