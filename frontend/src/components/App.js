import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Navbar from "./layout/navbar";
import Login from "./accounts/login";
import Register from "./accounts/register";
import PrivateRoute from "./common/PrivateRoute";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from "../store";
import { loadUser } from "../actions/auth";
import Categories from "./categories/categorylist";
import Events from "./categories/events/events";
import MyEvents from "./categories/events/myevents";


class App extends Component {
    componentDidMount() {
       store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>

                <Router >
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={ Categories }>
                            {/*<Categories/>*/}
                        </Route>
                        <Route path="/login" component={ Login }>
                        </Route>
                        <Route path="/register" component={ Register }>
                        </Route>
                        <Route path="/events" component={ Events }>
                        </Route>
                        <PrivateRoute path="/myprofile" component = { MyEvents }>
                        </PrivateRoute>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
