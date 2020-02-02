import React, { Component, Fragment} from 'react';
import Event from "./event";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEvents, sortEventsByDate, selectEventsByOrganiser } from "../../../actions/events";


export class Events extends Component {
    state = {
        OwnerName: ''
    };
    static propTypes = {
        events: PropTypes.array.isRequired,
        getEvents: PropTypes.func.isRequired,
        sortEventsByDate: PropTypes.func.isRequired,
        selectEventsByOrganiser: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getEvents();
    }

    formatDate(date) {
        date = date.replace('T', ' ').replace(':00Z', '');
        return date
    }

    onChange = e => {
        this.setState({
            OwnerName: e.target.value
        })
    };

    onSort = () => {
        this.props.sortEventsByDate();
        this.setState({
            events: this.props.events
        })
    };

    onSelect = () => {
        this.props.selectEventsByOrganiser(this.state.OwnerName);
    };


    render() {
        let eventList = this.props.events.map(event => (
                        <Event
                            key={event.id}
                            id={event.id}
                            name={event.name}
                            description={event.description}
                            img={event.photo}
                            scores={event.scores}
                            participants={event.participants}
                            date={this.formatDate(event.date)}
                            ownername={event.owner_name}
                        />
                        ));
        return(
            <Fragment>
                <div className="container">
                    <div className="row event-advanced">
                        <button type="button" className="btn btn-primary btn-sm col-md-2 col-md-offset-2" onClick={this.onSort}>sort by date</button>
                        <div className="search-by-organiser input-group input-group-sm col-md-6">
                            <div className="input-group-prepend">
                                <button className="btn btn-outline-secondary" type="button" onClick={this.onSelect}>Search by organiser</button>
                            </div>
                            <input type="text" className="form-control" placeholder="organiser name" aria-label=""
                                   aria-describedby="basic-addon1" onChange={this.onChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <button type="button" className="btn btn-success" onClick={this.props.getEvents}>Reset</button>
                    </div>
                    {eventList.length ? eventList : <div className="alert alert-warning" role="alert">No results Found</div>}
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    events: state.events.events,
});

export default connect(mapStateToProps, { getEvents, sortEventsByDate, selectEventsByOrganiser })(Events);