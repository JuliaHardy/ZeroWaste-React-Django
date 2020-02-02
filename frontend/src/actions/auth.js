import axios from 'axios';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS, REGISTER_FAIL
} from './types';

export const loadUser = () => (dispath, getState) => {
    // user loading
    dispath({ type: USER_LOADING });

    axios.get('api/auth/user', tokenConfig(getState))
        .then(res => {
            dispath({
                type: USER_LOADED,
                payload: res.data
            });
        })
        .catch(err => {
            console.log(err);
            dispath({
                type: AUTH_ERROR
            })
        })
};

export const login = (username, password) => dispath => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({username, password});

    axios.post('api/auth/login', body, config)
        .then(res => {
            dispath({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            console.log(err);
            dispath({
                type: LOGIN_FAIL
            })
        })
};

export const logout = () => (dispath, getState) => {

    axios.post('api/auth/logout/', null, tokenConfig(getState))
        .then(res => {
            dispath({
                type: LOGOUT_SUCCESS,
            });
        })
        .catch(err => {
            console.log(err);
        })
};

export const register = ({username, password, email}) => dispath => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({username, password, email});

    axios.post('api/auth/register', body, config)
        .then(res => {
            dispath({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            console.log(err);
            dispath({
                type: REGISTER_FAIL
            })
        })
};

export const tokenConfig = getState => {
    const token = getState().auth.token;

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // if token, add to headers config
    if(token) {
        config.headers['Authorization'] = `Token ${token}`;
    }
    return config;
};

