import { call, put, takeEvery} from 'redux-saga/effects';
import * as dashboardApi from './dashboardApi';
import * as dashboardActions from "./dashboardActions";
import * as tableActions from "./table/tableActions";

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

function* dashboardSaga() {
    yield takeEvery(dashboardActions.GET_BASE, fetchBase);
    yield takeEvery(dashboardActions.GET_TABLES, fetchTables);
    yield takeEvery(tableActions.ADD_RECORD, addNewRecord);
    yield takeEvery(tableActions.REMOVE_RECORD, removeTableRecord);
}

export default dashboardSaga;