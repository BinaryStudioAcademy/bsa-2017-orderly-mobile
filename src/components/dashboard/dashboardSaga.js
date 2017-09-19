import { call, put, takeEvery} from 'redux-saga/effects';
import * as dashboardApi from './dashboardApi';
import * as actions from "./dashboardActions";

function* fetchBase(action) {
    try {
        const payload = {};
        payload.base = yield call(dashboardApi.getBase, action._id);
        payload.tableId = payload.base.tables[0];
        yield put({type: actions.GET_BASE_DONE, payload});
    } catch (err) {
        yield put({type: actions.GET_BASE_ERROR, message: err.message});
    }
}

function* fetchTables(action) {
    try {
        const tables = yield call(dashboardApi.getTables, action.tablesId);
        yield put({type: actions.GET_TABLES_DONE, tables: tables});
        yield put({type: actions.SWITCH_TABLE, tableId: tables[0]._id});
    } catch (err) {
        yield put({type: actions.GET_TABLES_ERROR, message: err.message});
    }
}

function* dashboardSaga() {
    yield takeEvery(actions.GET_BASE, fetchBase);
    yield takeEvery(actions.GET_TABLES, fetchTables);
}

export default dashboardSaga;