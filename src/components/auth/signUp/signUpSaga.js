import { call, put, takeEvery} from 'redux-saga/effects';
import * as signUpApi from './signUpApi';
//import { browserHistory } from 'react-router';// ??????
import { NavigationActions } from 'react-navigation';
import { SIGN_UP_USER, SIGN_UP_PROCESS, SIGN_UP_ERROR } from "./signUpActions";

function* fetchUser(action) {
    try {
        const signUp = yield call(signUpApi.fetchSignUp, action);
        yield put({type: SIGN_UP_PROCESS, result: signUp});// ??????
        if (!signUp.success) {
            yield put({type: SIGN_UP_ERROR, errors: signUp.errors, message: signUp.message});
        } else {
            //browserHistory.push('/login');// ??????
            NavigationActions.navigate({ routeName: 'Login' });
        }
    } catch (e) {
        yield put({type: SIGN_UP_ERROR, message: e.message});
    }
}

function* signUpSaga() {
    yield takeEvery(SIGN_UP_USER, fetchUser);
}

export default signUpSaga;