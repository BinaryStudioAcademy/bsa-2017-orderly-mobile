import {GET_TABLES_DONE, GET_BASE_DONE, SWITCH_TABLE} from './dashboardActions';

const initialState = {
    tables: [],
};

function dashboardReducer(state = initialState, action) {
    switch (action.type) {
    case GET_BASE_DONE:
        return {...state, base: action.base};

    case GET_TABLES_DONE:
        return {...state, tables: action.tables};

    case SWITCH_TABLE:
        const activeTable = state.tables.find((t) => t._id === action.tableId);
        return {...state, activeTable: activeTable};

    default: return state;
    }
}

export default dashboardReducer;