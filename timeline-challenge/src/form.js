import React, { useState } from 'react';

const EventForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate the form data and add the new event to the list
        const startTime = parseInt(start);
        const endTime = parseInt(end);
        if (!isNaN(startTime) && !isNaN(endTime) && startTime < endTime) {
        onSubmit({ name, start: startTime, end: endTime });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </label>
        <label>
            Start:
            <input
            name="start"
            type="number"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            />
        </label>
        <label>
            End:
            <input
            name="end"
            type="number"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            />
        </label>
        <button type="submit">Add Event</button>
        </form>
    );
};

export default EventForm;

