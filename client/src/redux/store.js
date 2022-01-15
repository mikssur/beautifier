import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
// import {mySaga} from '../redux/sagas/sagas';
const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware),));
// sagaMiddleware.run(mySaga)

export default store;
