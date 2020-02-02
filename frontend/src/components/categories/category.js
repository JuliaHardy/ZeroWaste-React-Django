import React, { Component } from 'react';
import {Link} from "react-router-dom";

export class Category extends Component {
    render() {
        return(
            <div className="col-lg-4 col-md-10 col-md-offset-1">
                <div className={`card home ${this.props.styleName}`}>
                    <div className="card-body">
                        <img src={this.props.img} className="card-img"/>
                        <h5 className="card-title">{this.props.name}</h5>
                        <p className="card-text">{this.props.description}</p>
                        <Link to={this.props.link} className="card-link">See {this.props.name}</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Category;