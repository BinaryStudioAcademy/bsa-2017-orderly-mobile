import { call, put, takeEvery, takeLatest, select} from 'redux-saga/effects';
import * as dashboardApi from './dashboardApi';
import * as dashboardActions from "./dashboardActions";
import * as tableActions from "./table/tableActions";

const getDashboardReducer = (state) => state.dashboard;
const getUserProfileReducer = (state) => state.userProfile;

function* fetchBase(action) {
    try {
        const payload = {};
        payload.base = yield call(dashboardApi.getBase, action._id);
        payload.tableId = payload.base.tables[0];
        yield put({type: dashboardActions.GET_BASE_DONE, payload});
    } catch (err) {
        yield put({type: dashboardActions.GET_BASE_ERROR, message: err.message});
    }
}

function* fetchTables(action) {
    try {
        const tables = yield call(dashboardApi.getTables, action.tablesId);
        yield put({type: dashboardActions.GET_TABLES_DONE, tables: tables});
        yield put({type: dashboardActions.SWITCH_TABLE, tableId: tables[0]._id});
    } catch (err) {
        yield put({type: dashboardActions.GET_TABLES_ERROR, message: err.message});
    }
}

function* addNewRecord(action) {
    try {
        const table = yield call(dashboardApi.addRecord, action.tableId);
        yield put({type: tableActions.UPDATE_RECORD_DONE, table});
    } catch (err) {
        yield put({type: tableActions.UPDATE_RECORD_ERROR, message: err.message});
    }
}

function* removeTableRecord(action) {
    console.log('REMOVE SAGA');
    console.log(action);
    try {
        const table = yield call(dashboardApi.removeRecord, action.tableId, action.recordId);
        yield put({type: tableActions.UPDATE_RECORD_DONE, table: table.data});
    } catch (err) {
        yield put({type: tableActions.UPDATE_RECORD_ERROR, message: err.message});
    }
}

function* changeTableRecord(action) {
    try {
        const UserProfileReducer = yield select(getUserProfileReducer);
        yield put({
            type: tableActions.PERFORM_CHANGE_RECORD,
            tableId: action.tableId,
            recordId: action.recordId,
            data: action.data,
            user: UserProfileReducer.user
        });
        const dashboardReducer = yield select(getDashboardReducer);
        let table = dashboardReducer.tables.filter((t) => t._id === action.tableId).pop();
        yield put({type: tableActions.UPDATE_TABLE, tableId: action.tableId, newData: table});
    } catch (err) {
        yield put({type: tableActions.UPDATE_TABLE_FAILED, message: err.message});
    }
}

function* changeTable(action) {
    try {
        const payload = {};
        payload._id = action.tableId;
        payload.body = action.newData;
        const changedTable = yield call(dashboardApi.updateTable, payload);
        yield put({type: tableActions.RENAME_TABLE_SUCCEEDED, changedTable});
    } catch (err) {
        yield put({type: tableActions.RENAME_TABLE_FAILED, message: err.message});
    }
}

function* dashboardSaga() {
    yield takeEvery(dashboardActions.GET_BASE, fetchBase);
    yield takeEvery(dashboardActions.GET_TABLES, fetchTables);
    yield takeEvery(tableActions.ADD_RECORD, addNewRecord);
    yield takeEvery(tableActions.REMOVE_RECORD, removeTableRecord);
    yield takeLatest(tableActions.CHANGE_RECORD, changeTableRecord);
    yield takeEvery(tableActions.UPDATE_TABLE, changeTable);
}

export default dashboardSaga;