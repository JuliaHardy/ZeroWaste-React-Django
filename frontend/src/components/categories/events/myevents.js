import React, { Component, Fragment} from 'react';
import MyEvent from "./myevent";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMyEvents, deleteMyEvent } from "../../../actions/events";
import EventForm from './eventform';


export class MyEvents extends Component {
    static propTypes = {
        myEvents: PropTypes.array.isRequired,
        getMyEvents: PropTypes.func.isRequired,
        deleteMyEvent: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getMyEvents();
    }

    formatDate(date) {
        date = date.replace('T', ' ').replace(':00Z', '');
        return date
    }

    render() {
        return(
            <Fragment>
                <EventForm/>
                <div className="container">
                    <h2>My Events</h2>
                    { this.props.myEvents.map(event => (
                        <MyEvent
                            key={event.id}
                            id={event.id}
                            name={event.name}
                            description={event.description}
                            img={event.photo}
                            scores={event.scores}
                            participants={event.participants}
                            date={this.formatDate(event.date)}
                            ownername={event.owner_name}
                            onClick={this.props.deleteMyEvent.bind(this, event.id)}
                        />
                    ))}
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    myEvents: state.myEvents.myEvents
});

export default connect(
    mapStateToProps,
    { getMyEvents, deleteMyEvent }
    )(MyEvents);