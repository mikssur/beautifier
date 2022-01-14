import { call, put, takeEvery } from 'redux-saga/effects'
import {categoriesInitAC} from '../actionCreators/categoriesAC';
import {servicesInitAC} from '../actionCreators/servicesAC';

const fetchCategories = async () => {
  const response = await 
fetch('/categories')
  const categories = await response.json()
  return categories
}

const fetchServices = async () => {
  const categoryname = action.payload
  const response = await 
fetch('/categories/:categoryname') //????????????????????????????????????????
  const services = await response.json()
  return {services, categoryname}
}

const fetchMasters = async () => {
  const servicename = action.payload
  const response = await 
fetch('/servicename') //????????????????????????????????????????
  const masters = await response.json()
  return masters
}

// исполнитель (worker)
function* getFetchCategories() {
  const categories = yield call(fetchCategories)
  console.log(categories)
  yield put(categoriesInitAC(categories))
}

function* getFetchServices() {
  const {services, categoryname} = yield call(fetchServices)
  // console.log({services, categoryname})
  yield put(servicesInitAC({services, categoryname}))
}

function* getFetchMasters() {
  const masters = yield call(fetchMasters)
  console.log(masters)
  yield put(mastersInitAC(masters))
}
// наблюдатель (watcher) типа действия + какой исполнитель будет работать
export function* mySaga() {
  yield takeEvery("GET_FETCH_CATEGORIES", getFetchCategories);
  yield takeEvery("GET_FETCH_SERVICES", getFetchServices);
  //yield takeEvery("GET_FETCH_SERVICES", getFetchServices);
  yield takeEvery("GET_FETCH_MASTERS", getFetchMasters);
}

export default mySaga;
