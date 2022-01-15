import { call, put, takeEvery } from 'redux-saga/effects'

const mastersFetch = async () => {

  const response = await fetch(`${process.env.REACT_APP_URL}/masters`)
  console.log(response);
  const masters = await response.json()

  return masters
}

function* fetchMasters() {
  const masters = yield call(mastersFetch);
  yield put({ type: "INIT_MASTERS", payload: masters });
}


export function* myWatcher() {
  yield takeEvery("MASTERS_FETCH", fetchMasters);
}
