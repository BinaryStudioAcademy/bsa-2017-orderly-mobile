import { GET_TABLES_DONE } from './dashboardActions';

const initialState = {
    user: {name: 'Darth', ava: ''},
    base: {name: 'Clones', color: '#CCC', icon: 'computer'},
    tables: [],
};

function dashboardReducer(state = initialState, action) {
    switch (action.type) {
    case GET_TABLES_DONE:
        return {...state, tables: action.tables};
    default:
        return state;
    }
}

export default dashboardReducer;