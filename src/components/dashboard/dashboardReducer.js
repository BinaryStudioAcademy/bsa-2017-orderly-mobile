import {GET_TABLES_DONE, GET_BASE_DONE, SWITCH_TABLE} from './dashboardActions';
import {UPDATE_RECORD_DONE} from './table/tableActions';
import R from 'ramda';

const initialState = {
    base: {},
    tables: [],
    activeTable: {},
};

function dashboardReducer(state = initialState, action) {
    let activeTable;

    switch (action.type) {
    case GET_BASE_DONE:
        return {...state, base: action.base};

    case GET_TABLES_DONE:
        return {...state, tables: action.tables};

    case SWITCH_TABLE:
        activeTable = state.tables.find((t) => t._id === action.tableId);
        return {...state, activeTable: activeTable};

    case UPDATE_RECORD_DONE:
        console.log('AT REDUCER');
        console.log(action);
        return R.mergeAll([
            R.dissoc('tables', state),
            {
                tables: R.map((table) => {
                    if (table._id === action.table._id) {
                        let newTable = R.dissoc('records', table);
                        newTable.records = action.table.records;
                        return newTable;
                    }
                    return table;
                })(state.tables)
            }
        ]);

    default: return state;
    }
}

export default dashboardReducer;