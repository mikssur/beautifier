
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers/rootReducer';



import { mySaga } from '../redux/sagas/sagas';
// sagaMiddleware.run(mySaga)

import createSagaMiddleware from 'redux-saga'
// import { myWatcher } from './sagas/saga'
import { portfolioWatcher } from './sagas/portfolioSaga'


const sagaMiddleware = createSagaMiddleware()

// sagaMiddleware.run(myWatcher)


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(portfolioWatcher)
sagaMiddleware.run(mySaga)
