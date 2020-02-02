import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from "../../actions/auth";

export class Navbar extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    };
    render() {
        const { isAuthenticated, user } = this.props.auth;

        const guestLinks = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/register" className="nav-link">Register</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
            </ul>
        );

        const authLinks = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/myprofile" className="nav-link">My Profile</Link>
                </li>
                <li className="nav-item">
                    <button onClick={this.props.logout} className="nav-link btn btn-info btn-sm text-light">
                        Logout
                    </button>
                </li>
            </ul>
        );

        return (
            <nav className="navbar navbar-expand-lg navbar-light" style={{background: "#97c76e"}}>
                <a className="navbar-brand" href="#">
                    <span className="glyphicon glyphicon-grain"></span>Zero Waste</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home<span className="sr-only">(current)</span></Link>
                        </li>
                        {/*<li className="nav-item">*/}
                        {/*    <a className="nav-link" href="#">About</a>*/}
                        {/*</li>*/}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Categories
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link to="/events" className="dropdown-item">Events</Link>
                                <a className="dropdown-item" href="#">Shops</a>
                                <a className="dropdown-item" href="#">Personal Goals</a>
                            </div>
                        </li>
                        {/*<li className="nav-item">*/}
                        {/*    <a className="nav-link" href="#">Contact</a>*/}
                        {/*</li>*/}
                    </ul>
                    { isAuthenticated ? authLinks : guestLinks }
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);