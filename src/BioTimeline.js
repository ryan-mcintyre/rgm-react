import React, { Component } from 'react';
import RepeaterComponent from 'repeater-react';
import './App.css';

class BioTimeline extends Component {
    render() {
        const { events } = this.props.events

        return (
            <RepeaterComponent content={events} component={EventBubble} />
        )
    }
}

const EventBubble = props => {
    return (
        <div className="eventCont">
            <p>{props.events.title}</p>
            <p>{props.events.description}</p>
        </div>
   )
}

export default BioTimeline;
