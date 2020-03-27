import React from 'react';
import { Link } from 'react-router-dom';
import Filter from '../components/Filter';
import * as eventActions from '../redux/actions/eventActions';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import SingleEvent from './../components/SingleEvent';
import { FaSistrix } from 'react-icons/fa';


function EventsList({ getEvents, events }) {
    console.log()
    useEffect(() => {
        if (events.length === 0) {
            getEvents();
        }
    }, [getEvents, events.length]);
    return (
        <>
            <div className="events">

                <form className="events-search" action="">
                    <FaSistrix className="search-icon" />
                    <input type="search" />
                </form>

                <div className="events-container">
                    {events.map(event => {
                        return <SingleEvent data={event} key={event.id} />
                    })}
                </div>
            </div>
        </>
    )
}

function mapStateToProps(state) {
    return { events: state.events }
}

const mapDispatchToProps = {
    getEvents: eventActions.getEvents
}
export default connect(mapStateToProps, mapDispatchToProps)(EventsList)