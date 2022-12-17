import React, { useState } from 'react';

const Timeline = () => {
  const [events, setEvents] = useState([]); // initialize an empty array of events

  // utility function to find the minimum number of required levels to stack the events
    const findMinLevels = () => {
        // sort the events by start time
        const sortedEvents = events.sort((a, b) => a.start - b.start);

        // initialize an array of levels, where each level represents the end time of the event in that level
        const levels = [];

        // iterate through the sorted events
        for (const event of sortedEvents) {
        // find the first level that is available for this event (i.e., level end time is before the start time of the event)
        const availableLevel = levels.findIndex(levelEndTime => levelEndTime <= event.start);

        // if no level is available, push a new level with the end time of the event
        if (availableLevel === -1) {
            levels.push(event.end);
        } else {
            // otherwise, update the end time of the available level with the end time of the event
            levels[availableLevel] = event.end;
        }
        }

        // return the number of levels used
        return levels.length;
    };

    // event handler for the submit button of the form
    const handleSubmit = event => {
        event.preventDefault();

        // get the form values
        const start = event.target.start.value;
        const end = event.target.end.value;

        // validate the form values
        if (start < 0 || end > 86400 || start >= end) {
        return; // do not add the event if the values are invalid/
        }

        // add the new event to the list of events
        setEvents([...events, { start, end }]);
    };

return (
    <div>
        {/* render the timeline */}
        <div style={{ display: 'flex' }}>
        
        {/* render the level numbers */}
        <div style={{ width: '50px', position: 'absolute', top: 0 }}>
            {Array.from(Array(findMinLevels())).map((_, index) => (
                <div key={index} style={{ height: '20px' }}>
                {index + 1}
                </div>
            ))}
        </div>
        {events.map((event, index) => {
            // calculate the width and offset of the event based on its start and end times
            const width = (event.end - event.start) / 86400 * 100;
            const offset = event.start / 86400 * 100;

            // calculate the level of the event based on the number of minimum required levels
            const minLevels = findMinLevels();
            const level = index % minLevels;

            // return the event element
            return (
            <div
                key={index}
                style={{
                position: 'absolute',
                left: `${offset}%`,
                width: `${width}%`,
                top: `${level * 20}px`,
                backgroundColor: 'red',
                height: '20px',
                }}
            />
            );
        })}
        </div>

        {/* render the form to create new timeline entries */}
        <h2>Event Input</h2>
        <form onSubmit={handleSubmit}>
        <label>
            Start:
            <input type="number" name="start" />
        </label>
        <label>
            End:
            <input type="number" name="end" />
        </label>
        <button type="submit">Add Event</button>
        </form>
    </div>
);

}
export default Timeline;



