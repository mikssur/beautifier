import { call, put, takeEvery } from 'redux-saga/effects'

const adminChangePassFetch = async ({ oldPass, newPass }) => {
  // console.log(login);
  const response = await fetch(`/adminpasschange`, {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      oldPass,
      newPass,
    })
  })
  const result = await response.json()
  return result
}

function* fetchAdminChangePass(action) {
  const result = yield call(adminChangePassFetch, {
    oldPass: action.payload.oldPass,
    newPass: action.payload.newPass,
  });
  yield put({ type: "CHANGE_PASS", payload: { result } });
}


export function* adminChangePassWatcher() {
  // console.log(666);
  yield takeEvery("ADMIN_CHANGE_PASS_FETCH", fetchAdminChangePass);
}
