import React from 'react';
import { Link } from 'react-router-dom';
import Filter from '../components/Filter';

function EventsList(props) {
    console.log(props)
    return (
        <>
            <div className="events">
                <Filter />
                <div className="events-container">
                    
                </div>
            </div>
        </>
    )
}

export default EventsList
