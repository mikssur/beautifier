import { createStore, } from 'redux';
import { composeWithDevTools, applyMiddleware } from 'redux-devtools-extension';
import { rootReducer } from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga'
import { myWatcher } from './sagas/saga'
import { masterWatcher } from './sagas/masterSaga'


const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(myWatcher)
sagaMiddleware.run(masterWatcher)

export default store;
