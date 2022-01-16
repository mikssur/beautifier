import { call, put, takeEvery } from 'redux-saga/effects'
import { categoriesInitAC } from '../actionCreators/categoriesAC';
import { gettFetchServicesAC } from '../actionCreators/servicesAC';

const fetchCategories = async () => {
  console.log('HEEEEEEEEEYYYYYYYYYYYYYYYYYY')
  const response = await fetch('http://localhost:3001/categories')
  const categories = await response.json()
  console.log(categories, '222222222222222222222')
  return categories
}

const fetchServices = async ({id}) => {
  console.log(id)
  //const id = gettFetchServicesAC.payload
  //console.log(gettFetchServicesAC())
  const response = await
    fetch(`http://localhost:3001/categories/${id}`) //????????????????????????????????????????
  const services = await response.json()
  console.log('SERVISI V FECHEEEE!!!!!!', services)
  return services
}

const fetchMasters = async ({id}) => {
  const response = await
fetch(`http://localhost:3001/masters/${id}`) //????????????????????????????????????????
  const masters = await response.json()
  return masters
}

// // исполнитель (worker)
// function* getFetchCategories() {
//   const categories = yield call(fetchCategories)
//   console.log(categories)
//   yield put(categoriesInitAC(categories))
// }


function* getFetchCategories() {
  console.log('GETFETCH FUNCTION')
  // try {
  const categories = yield call(fetchCategories);
  yield put({ type: "INIT_CATEGORIES", payload: categories });
  // } 
  // catch (e) {

  //   yield put({ type: "USER_FETCH_FAILED", message: e.message });
  // }
}

function* getFetchServices(action) {
  //const id = getFetchServices.payload
  console.log(action, 'ACTION BLIIIIIIIINNNNNNNN')

  const services = yield call(fetchServices, {id: action.payload.id})
  console.log(services)
  yield put({ type: "INIT_SERVICES", payload: { services } })
}

function* getFetchMasters(action) {
  const masters = yield call(fetchMasters, {id: action.payload.id})
  console.log(masters)
  yield put({ type: 'INIT_MASTERS', payload: { masters } })
}
// // наблюдатель (watcher) типа действия + какой исполнитель будет работать
export function* mySaga() {
  console.log('SAGA WATCHER')
  yield takeEvery('GET_FETCH_CATEGORIES', getFetchCategories);
  console.log('SAGA WATCHER  2')
  yield takeEvery('GET_FETCH_SERVICES', getFetchServices);
  //   //   //yield takeEvery("GET_FETCH_SERVICES", getFetchServices);
  yield takeEvery("GET_FETCH_MASTERS", getFetchMasters);
}

export default mySaga;
