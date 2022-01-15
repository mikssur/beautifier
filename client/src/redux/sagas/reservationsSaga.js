import { call, put, takeEvery } from 'redux-saga/effects'

const reservationFetch = async () => {

  // в ссылке может быть неправильный сервер и порт
  const response = await fetch(`http://localhost:3001/reservations`)
  console.log("sagaReservation:", response);
  const reservations = await response.json()

  return reservations
}

function* fetchReservation() {
  const reservations = yield call(reservationFetch);
  yield put({ type: "INIT_RESERVATIONS", payload: reservations });
}


export function* reservationWatcher() {
  yield takeEvery("RESERVATIONS_FETCH", fetchReservation);
}
