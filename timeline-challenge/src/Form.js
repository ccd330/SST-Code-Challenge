import React from 'react';

class EventForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // startTime: ({input: ''}),
            // endTime: ({input: ''})
        };

        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeStart(event) {
        this.setState({value: event.target.startTime});
    }

    handleChangeEnd(event) {
        this.setState({value: event.target.endTime});
    }

    handleSubmit(event) {
        alert('An event was submitted: ' + this.state.startTime + '-' + this.state.endTime);
        //prevent browser reload on new event submission
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Event Start Time:
                    <input type="number" min="0" name="startTime" value={this.state.startTime} onChange={this.handleChangeStart} />
                </label>
                <label>
                    Event End Time:
                    <input type="number" max="86400" name="endTime" value={this.state.endTime} onChange={this.handleChangeEnd} />
                </label>
                <input type="submit" value="Create Event" />
            </form>
        )
    }
}

export default EventForm;