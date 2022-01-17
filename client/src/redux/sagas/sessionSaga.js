import { call, put, takeEvery } from 'redux-saga/effects'

const sessionFetch = async () => {
  console.log("fetch 1");
  const response = await fetch(`/session`)
  const session = await response.json()
  console.log("fetch 2", session);
  return session
}

function* fetchSession() {
  const session = yield call(sessionFetch);
  yield put({ type: 'INIT_SESSION', payload: { session } });
}


export function* sessionWatcher() {
  yield takeEvery("SESSION_FETCH", fetchSession);

}
