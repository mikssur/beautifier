import { call, put, takeEvery } from 'redux-saga/effects'
import { categoriesInitAC } from '../actionCreators/categoriesAC';
import { gettFetchServicesAC } from '../actionCreators/servicesAC';

const fetchCategories = async () => {
  console.log('HEEEEEEEEEYYYYYYYYYYYYYYYYYY')
  const response = await fetch('/categories')
  const categories = await response.json()
  console.log(categories, '222222222222222222222')
  return categories
}

const fetchServices = async ({id}) => {
  console.log(id)
  //const id = gettFetchServicesAC.payload
  //console.log(gettFetchServicesAC())
  const response = await
    fetch(`/categories/${id}`) //????????????????????????????????????????
  const services = await response.json()
  console.log('SERVISI V FECHEEEE!!!!!!', services)
  return services
}

const fetchMasters = async ({id}) => {
  const response = await
fetch(`/masters/${id}`) //????????????????????????????????????????
  const masters = await response.json()
  return masters
}

const fetchReview = async ({id}) => {
  console.log('ID V SAGAH FETCH REVIEW CHTO PEREDAJETSYA', id)

  const response = await fetch(`/reviews/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      id,
    })
  })
  console.log("deleteReview response", response);
  const review = await response.json()
  // const id = review.id
  console.log('RV SAGAH REVIEW DOLZHNO BITJ OTVET I ID', review)
  return review
}
// // исполнитель (worker)
// function* getFetchCategories() {
//   const categories = yield call(fetchCategories)
//   console.log(categories)
//   yield put(categoriesInitAC(categories))
// }
const fetchAddReview = async ({obj}) => {
  console.log('OBJ V SAGAH FETCH REVIEW OBBBJJJJJJ CHTO PEREDAJETSYA', obj)

  const response = await fetch(`/reviews`, {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      obj,
    })
  })
  console.log("addReview response", response);
  const review = await response.json()
  // const id = review.id
  console.log('RV SAGAH REVIEW AAAADDDDDDDDDDDDD', review)
  return review
}


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

function* deleteFetchReview(action) {
  const review = yield call(fetchReview, {id: action.payload.reviewId})
  console.log(review, 'REVIEWWWWWWWWWWWWWWW')
  yield put({ type: 'DELETE_REVIEW', payload: { review } })
}

function* addFetchReview(action) {
  console.log('101010011001010010101PAYLOAD', action.payload)
  const review = yield call(fetchAddReview, {obj: action.payload})
  console.log(review, 'REVIEWWWWWWWWWWWWWWW')
  yield put({ type: 'ADD_REVIEW', payload: { review } })
}
// // наблюдатель (watcher) типа действия + какой исполнитель будет работать
export function* mySaga() {
  console.log('SAGA WATCHER')
  yield takeEvery('GET_FETCH_CATEGORIES', getFetchCategories);
  console.log('SAGA WATCHER  2')
  yield takeEvery('GET_FETCH_SERVICES', getFetchServices);
  //   //   //yield takeEvery("GET_FETCH_SERVICES", getFetchServices);
  yield takeEvery("GET_FETCH_MASTERS", getFetchMasters);
  yield takeEvery("DELETE_FETCH_REVIEW", deleteFetchReview);
  yield takeEvery("ADD_FETCH_REVIEW", addFetchReview);
}

export default mySaga;
