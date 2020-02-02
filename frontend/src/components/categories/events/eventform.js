import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createMyEvent } from "../../../actions/events";

export class EventForm extends Component {
    state = {
        name: '',
        description: '',
        photo: undefined,
        date: ''
    };

    static propTypes = {
        createMyEvent: PropTypes.func.isRequired
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onImageChange = e => {
        this.setState({
        photo: e.target.files[0]
    })
  };

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        let form_data = new FormData();
        form_data.append('photo', this.state.photo, this.state.photo.name)
        form_data.append('name', this.state.name)
        form_data.append('description', this.state.description)
        form_data.append('date', this.state.date)
        this.props.createMyEvent(form_data);
    }

    render() {
        const { name, description, img, date } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Event</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Event Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={this.onChange}
                            value={name}
                        />
                    </div>
                     <div className="form-group">
                        <label>Event description</label>
                        <input
                            className="form-control"
                            type="text"
                            name="description"
                            onChange={this.onChange}
                            value={description}
                        />
                    </div>
                    <div className="form-group">
                        <label>Event photo</label>
                        <input
                            className="form-control"
                            type="file"
                            name="photo"
                            accept="image/*"
                            onChange={this.onImageChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Event date</label>
                        <input
                            className="form-control"
                            type="datetime-local"
                            name="date"
                            onChange={this.onChange}
                            value={date}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { createMyEvent })(EventForm);