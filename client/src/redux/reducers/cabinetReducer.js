
const initialState = { reservation: { reservations: [], masters: [], services: [] } }

export const cabinetReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_CABINET': {
      console.log(action.payload)
      const copyReservation = { ...state.reservation };
      // это я их просто отдаю


      copyReservation.masters = action.payload.masters;
      copyReservation.services = action.payload.services;
      copyReservation.reservations = action.payload.reservations;

      return { ...state, reservation: copyReservation }
    }

    default:
      return state;
  }
};

export default cabinetReducer;
