import { call, put, takeEvery } from 'redux-saga/effects'

const adminReservationChangeFetch = async ({ id, clientName, clientNumber, masterId, serviceId }) => {
  const response = await fetch(`/adminchangereservation`, {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      id,
      clientName,
      clientNumber,
      masterId,
      serviceId
    })
  })
  console.log("AdminChangeReservation");
  const reservations = await response.json()
  return reservations
}

function* fetchAdminReservationChange(action) {
  const reservations = yield call(adminReservationChangeFetch, {
    id: action.payload.id,
    clientName: action.payload.clientName,
    clientNumber: action.payload.clientNumber,
    masterId: action.payload.masterId,
    serviceId: action.payload.serviceId,
  });
  yield put({ type: "INIT_RESERVATIONS", payload: reservations });
}


export function* adminReservationChangeWatcher() {

  yield takeEvery("CHANGE_RESERVATION_FORM", fetchAdminReservationChange);
}
