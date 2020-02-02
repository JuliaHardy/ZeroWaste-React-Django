import { GET_MY_EVENTS, DELETE_MY_EVENT, CREATE_MY_EVENT } from "../actions/types";

const initialState = {
    myEvents: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MY_EVENTS:
            return {
                ...state,
                myEvents: action.payload
            };
        case DELETE_MY_EVENT:
            return {
                ...state,
                myEvents: state.myEvents.filter(
                    myevent => myevent.id !== action.payload
                )
            };
        case CREATE_MY_EVENT:
            return {
                ...state,
                myEvents: [...state.myEvents, action.payload]
            };
        default:
            return state;
    }
}