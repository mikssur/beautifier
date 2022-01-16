// import { call, put, takeEvery } from 'redux-saga/effects'


// async function fetchData({ url, method, headers, body }) {
//   const response = await fetch(url, { method, headers, body });
//   const data = await response.json();
//   return data;
// }

// function* fetchPostCabinet(action) {
//   const newDog = yield call(fetchData, {
//     url: `http://localhost:3001/cabinet`, method: 'POST', headers: { 'Content-Type': 'Application/json' }, body: JSON.stringify({
//       log: action.payload.log,
//       pass: action.payload.pass,
//       tel: action.payload.tel,
//     })
//   });
//   yield put();
// }
// export function* myWatcher() {
//   yield takeEvery("CABINET_FETCH_POST", fetchPostCabinet);
}
