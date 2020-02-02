import { GET_EVENTS, GET_SORTED_EVENTS, GET_SELECTED_EVENTS } from "../actions/types";

const initialState = {
    events: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_EVENTS:
            return {
                ...state,
                events: action.payload
            };
        case GET_SORTED_EVENTS:
            let sortKey = 'date';
            return {
                ...state,
                events: state.events.sort( (a, b) => {
                    let a_date = new Date(a[sortKey]);
                    let b_date = new Date(b[sortKey]);
                    if( a_date.getTime() < b_date.getTime() ) return  -1;
                    if( a_date.getTime() > b_date.getTime() ) return  1;
                } )
            };
        case GET_SELECTED_EVENTS:
            return {
                ...state,
                events: action.payload.data.filter(
                    event => event.owner_name === action.payload.selector
                )
            };

        default:
            return state;
    }
}