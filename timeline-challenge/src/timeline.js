import React from 'react';

const Timeline = ({ events }) => {
  // Sort the events by start time
    events.sort((a, b) => a.start - b.start);

    return (
        <div className="timeline">
        {events.map((event, index) => {
            // Initialize an array to keep track of which levels are occupied at a given time
            const occupiedLevels = new Array(events.length).fill(false);

            // Find the lowest unoccupied level for this event
            let level = 0;
            while (occupiedLevels[level]) {
            level++;
            }

            // Mark this level as occupied
            for (let i = event.start; i < event.end; i++) {
            occupiedLevels[level] = true;
            }

            // Render the event block on the timeline
            return (
            <div
                key={index}
                className="event-block"
                style={{
                top: level * 50,
                width: event.end - event.start,
                left: event.start,
                }}
            >
                {event.name}
            </div>
            );
        })}
        </div>
    );
};

export default Timeline;

