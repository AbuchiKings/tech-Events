import React from 'react';
import { Link } from 'react-router-dom';


export default function SingleEvent({ data }) {
    return (
        <article className="event">
            <Link to={`/events/${data.id}`} className="events-link">
                <div>
                    <div className="image-container">
                        <img src={data.imageUrl} alt="" />
                    </div>
                    <div className="info-container">
                        <p className="event-date">{data.time}</p>
                        <p className='event-name'>{data.name}</p>
                        <p className='event-location'>{`${data.location?.address},
                     ${data.location?.city}, ${data.location?.country}`}</p>
                        <p className='event-price'>{data.price}</p>
                    </div>
                </div>
            </Link>

        </article>
    )
}
