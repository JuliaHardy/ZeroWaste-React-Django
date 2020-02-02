import axios from 'axios';
import { GET_EVENTS, GET_MY_EVENTS, DELETE_MY_EVENT, CREATE_MY_EVENT, GET_SORTED_EVENTS, GET_SELECTED_EVENTS } from "./types";
import { tokenConfig } from "./auth";

export const getEvents = () => dispatch => {
    axios.get('/events/api/events/')
        .then(res => {
            dispatch({
                type: GET_EVENTS,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

export const getMyEvents = () => (dispatch, getState) => {
    axios.get('/myprofile/api/myprofile/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_MY_EVENTS,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

export const deleteMyEvent = (id) => (dispatch, getState) => {
    axios.delete(`/myprofile/api/myprofile/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: DELETE_MY_EVENT,
                payload: id
            });
        }).catch(err => console.log(err));
};

export const createMyEvent = (event) => (dispatch, getState) => {
    const token = getState().auth.token;

    const config = {
        headers: {
            // 'Content-Type': 'multipart/form-data'
            'Content-Type': 'application/json'
        }
    };

    // if token, add to headers config
    if(token) {
        config.headers['Authorization'] = `Token ${token}`;
    }
    axios.post(`/myprofile/api/myprofile/`, event , config)
        .then(res => {
            dispatch({
                type: CREATE_MY_EVENT,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

export const sortEventsByDate = () => dispatch => {
    dispatch({
        type: GET_SORTED_EVENTS
    });
};

export const selectEventsByOrganiser = (organiserName) => dispatch => {
    axios.get('/events/api/events/')
        .then(res => {
            dispatch({
                type: GET_SELECTED_EVENTS,
                payload: {data: res.data, selector: organiserName}
            });
        }).catch(err => console.log(err));
};