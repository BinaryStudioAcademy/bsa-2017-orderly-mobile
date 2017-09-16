import { call, put, takeEvery} from 'redux-saga/effects';
import * as signUpApi from './signUpApi';
//import { browserHistory } from 'react-router';// ??????
import NavigatorService from '../../../navigators/navigatorService';
import { SIGN_UP_USER, SIGN_UP_PROCESS, SIGN_UP_ERROR } from "./signUpActions";
import { LOGIN_USER } from '../login/loginActions';

function* fetchUser(action) {
    try {
        const signUp = yield call(signUpApi.fetchSignUp, action);
        yield put({type: SIGN_UP_PROCESS, result: signUp});// ??????
        if (!signUp.success) {
            yield put({type: SIGN_UP_ERROR, errors: signUp.errors, message: signUp.message});
        } else {
            //browserHistory.push('/login');// ??????
            //NavigatorService.navigate('Login');
            yield put({type: LOGIN_USER, email: action.email, password: action.password});
        }
    } catch (e) {
        yield put({type: SIGN_UP_ERROR, message: e.message});
    }
}

function* signUpSaga() {
    yield takeEvery(SIGN_UP_USER, fetchUser);
}

export default signUpSaga;