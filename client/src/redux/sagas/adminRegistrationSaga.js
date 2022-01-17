import { call, put, takeEvery } from 'redux-saga/effects'

const adminRegistrationFetch = async ({ login, pass }) => {
  console.log(login);
  const response = await fetch(`/adminregistration`, {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      login: login,
      pass
    })
  })
  console.log("sagaReservation:", response);
  const reservations = await response.json()
  return reservations
}

function* fetchAdminRegistration(action) {
  const reservations = yield call(adminRegistrationFetch, {
    login: action.payload.login,
    pass: action.payload.pass
  });
  yield put({ type: "INIT_RESERVATIONS", payload: reservations });
}


export function* adminRegistrationWatcher() {
  console.log(789);
  yield takeEvery("ADMIN_REGISTRATION_FETCH", fetchAdminRegistration);
}
