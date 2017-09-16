import { call, takeEvery, select } from 'redux-saga/effects';
import { LOGOUT } from './logoutActions';
import { logoutService } from './logoutService';

function* logout() {
    yield call(logoutService.logout);
}

function* logoutSaga() {
    yield takeEvery(LOGOUT, logout);
}

export default logoutSaga;