
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './reducers/rootReducer';
import { mySaga } from '../redux/sagas/sagas';
// import { myWatcher } from './sagas/saga'
import { portfolioWatcher } from './sagas/portfolioSaga'
import { portfolioCWatcher } from './sagas/portfolioCSaga'
import { reservationWatcher } from './sagas/reservationsSaga'
import { reservationCategories } from './sagas/reservationCategoriesSaga';
import { sessionWatcher } from './sagas/sessionSaga'
import { adminRegistrationWatcher } from './sagas/adminRegistrationSaga';

const sagaMiddleware = createSagaMiddleware()

// sagaMiddleware.run(myWatcher)
// sagaMiddleware.run(portfolioWatcher)

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(reservationWatcher)
sagaMiddleware.run(portfolioWatcher)
sagaMiddleware.run(mySaga)
sagaMiddleware.run(portfolioCWatcher)
sagaMiddleware.run(reservationCategories)
sagaMiddleware.run(sessionWatcher)
sagaMiddleware.run(adminRegistrationWatcher)
