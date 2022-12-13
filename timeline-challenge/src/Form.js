import React from 'react';

class EventForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {startTime:null, endTime:null}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleChangeStart = this.handleChangeStart.bind(this);
        // this.handleChangeEnd = this.handleChangeEnd.bind(this);
        
    }

    // handleChangeStart(event) {
    //     this.setState({value: event.target.startTime});
    // }

    // handleChangeEnd(event) {
    //     this.setState({value: event.target.endTime});
    // }

    handleSubmit(event) {
        const { startTime, endTime} = this.state
        //prevent browser reload on new event submission
        event.preventDefault();
        alert(`
            startTime : ${startTime}
            endTime : ${endTime}
            `);
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Event Start Time:
                    <input type="number" min="0" name="startTime" value={this.state.startTime} onChange={this.handleChange} />
                </label>
                <label>
                    Event End Time:
                    <input type="number" max="86400" name="endTime" value={this.state.endTime} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Create Event" />
            </form>
        )
    }
}

export default EventForm;