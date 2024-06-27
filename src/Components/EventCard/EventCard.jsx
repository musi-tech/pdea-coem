import React from "react";
import "./eventcard.css";

function EventCard({ date, title, description,link }) {
  const truncatedDescription = description.length > 100 
    ? description.substring(0, 255) + "..." 
    : description;

  return (
    

    <div className="event-card">
        <div className="event-date-time-container">
            <time className="event-date-time" datetime={date}>
            <span>{new Date(date).getFullYear()}</span>
            <span className="event-separator"></span>
            <span>{new Date(date).toLocaleString('default', { month: 'short', day: 'numeric' })}</span>
            </time>
        </div>

        <div className="event-content">
        
            <div className="event-infos">
            <a href="/">
                <span className="event-title">
                {title}
                </span>
            </a>

            <p className="event-description">
            {truncatedDescription}
            </p>
            </div>

            <a className="event-action" href={link}>
                Register Now
            </a>
        </div>
    </div>
  );
}

export default EventCard;
