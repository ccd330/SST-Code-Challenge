import React, { Component } from 'react'
import { v4 as uuid } from 'uuid'
import NewEventForm from './NewEventForm'
import Event from './Event'

class EventList extends Component {
    constructor(props) {
        super(props)
        //initizlize empty array to hold list
        this.state = { boxes : [] }
        this.createEvent = this.createEvent.bind(this)
    }

    //create new event and add it to the event state
    createEvent(attrs) {
        const newEvent = { ...attrs, id: uuid()}
        this.setState({
            events: [...this.state.events, newEvent]
        })
    }

    //map over each event in events state and render an event component 
    renderEvents() {
        return this.state.events.map(event => {
            <Event key={event.id} attrs={event} />
        })
    }

    render() {
        return (
            <div>
                <h1>Make New Event</h1>
                <NewEventForm create={this.createEvent} />
                {this.renderEvents()}
            </div>
        )
    }
}

export default EventList;