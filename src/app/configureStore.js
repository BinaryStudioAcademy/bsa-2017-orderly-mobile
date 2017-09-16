import { createStore, applyMiddleware } from 'redux';
import AppReducer from './reducer';

import createSagaMiddleware from 'redux-saga';
import AppSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
    const store = createStore(AppReducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(AppSaga);
    return store;
}