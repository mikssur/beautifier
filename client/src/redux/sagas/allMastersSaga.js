import { call, put, takeEvery } from 'redux-saga/effects'

const allMastersFetch = async () => {
  console.log('yo');
  const response = await fetch(`/allmasters`)
  const masters = await response.json()
  return masters
}

function* fetchAllMasters() {
  const masters = yield call(allMastersFetch)
  console.log(masters)
  yield put({ type: 'INIT_ALL_MASTERS', payload: masters })
}

export function* allMastersWatcher() {
  console.log(666);
  yield takeEvery("ALL_MASTERS_FETCH", fetchAllMasters);
}