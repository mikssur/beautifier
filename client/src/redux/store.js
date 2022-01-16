
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga'
// import { myWatcher } from './sagas/saga'
import { portfolioWatcher } from './sagas/portfolioSaga'
import { portfolioCWatcher } from './sagas/portfolioCSaga'


const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

// sagaMiddleware.run(myWatcher)
sagaMiddleware.run(portfolioWatcher)
sagaMiddleware.run(portfolioCWatcher)

