import {GET_TABLES_DONE, GET_BASE_DONE, SWITCH_TABLE, PERFORM_CHANGE_RECORD} from './dashboardActions';
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


    case 'PERFORM_CHANGE_RECORD': {
        return R.mergeAll([
        R.omit(['tables'], state),
        {
            tables: R.map((table) => {
                if (table._id === action.tableId) {
                    return R.mergeAll([
                        R.dissoc('records', table),
                        {
                            records: R.map((record) => {
                                let changes = null;
                                const recordData = R.addIndex(R.map)((recordItem, fieldIndex) => {
                                    if ((recordItem._id === action.recordId) && (recordItem.data !== action.data)) {
                                        changes = {
                                            'field_id': table.fields[fieldIndex]._id,
                                            'record_id': recordItem._id,
                                            'changed_from': recordItem.data,
                                            'changed_to': action.data
                                        };

                                        let newObj = R.dissoc('data', recordItem);
                                        newObj.data = action.data;
                                        return newObj;
                                    } else {
                                        return recordItem;
                                    }
                                })(record.record_data);

                                let history = {};
                                if (changes) {
                                    history = {
                                        history: R.concat(record.history, [{
                                            collaborator: action.user,
                                            changes: changes
                                        }])
                                    };
                                }

                                return R.mergeAll([
                                    R.dissoc('record_data', record),
                                    {
                                        record_data: recordData
                                    },
                                    history
                                ]);
                            })(table.records)
                        }]);
                }
                return table;
            })(state.tables)
        }]);
    }

    default: return state;
    }
}

export default dashboardReducer;