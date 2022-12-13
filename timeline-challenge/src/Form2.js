import React from 'react';
import { useState } from 'react';

const FormTwo = () => {
    const [startTime, setStartTime] = useState("")
    const [endTime, setEndTime] = useState("")

    const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault(); //  prevent page refresh

    // access input values here
    console.log('startTime', startTime);
    console.log('endTime', endTime);

    setStartTime('')
    setEndTime('')

    }
    //need to figure out how to collect user input as objects and push objects into an array

    return (
        <div>
            <h1>Event Input</h1>
            <form onSubmit={handleSubmit}>
            <input
                placeholder="start time"
                name="startTime"
                type="number"
                value={startTime}
                onChange={event => setStartTime(event.target.value)}
            />
            <input
                placeholder="end time"
                name="endsTime"
                type="number"
                value={endTime}
                onChange={event => setEndTime(event.target.value)}
            />
            <button type="submit" >
            Submit
            </button>
            </form>
            <h1>Event Output</h1>
            <h2>Given Time: {setStartTime} to {setEndTime}</h2>
        </div>
    );
    
}

export default FormTwo;