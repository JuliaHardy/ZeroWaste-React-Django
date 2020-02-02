import React, { Component } from 'react';

export class Event extends Component {
    render() {
        return(
            <div className="col-lg-8 col-lg-offset-4 col-sm-10 col-sm-offset-1">
                <div className={`card event-${this.props.id}`}>
                    <img src={this.props.img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h4 className="card-title">{this.props.name}</h4>
                        <h5>{`event date: ${this.props.date}`}</h5>
                        <h6>{`event organiser: ${this.props.ownername}`}</h6>
                        <p className="card-text">{this.props.description}</p>
                        <a href="#" className="btn btn-primary">Sign in</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Event;