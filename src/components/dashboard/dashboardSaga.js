import { call, put, takeEvery} from 'redux-saga/effects';
import * as dashboardApi from './dashboardApi';
import NavigatorService from '../../navigators/navigatorService';
import { SIGN_UP_USER } from "./dashboardActions";

function* fetchUser(action) {
    try {
        const signUp = yield call(signUpApi.fetchSignUp, action);
        yield put({type: SIGN_UP_PROCESS, result: signUp});
        if (!signUp.success) {
            yield put({type: SIGN_UP_ERROR, errors: signUp.errors, message: signUp.message});
        } else {
            yield put({type: LOGIN_USER, email: action.email, password: action.password});
        }
    } catch (e) {
        yield put({type: SIGN_UP_ERROR, message: e.message});
    }
}

function* dashboardSaga() {
    yield takeEvery(SIGN_UP_USER, fetchUser);
}

export default dashboardSaga;