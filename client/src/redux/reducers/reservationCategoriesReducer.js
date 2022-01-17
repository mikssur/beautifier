
const reservationCategoriesInitialState = {
  reservationCategories: [],
  reservationServices: [],
  reservationMasters: [],
  reservationServiceId: null,
  reservationMasterId: null,
}

export const reservationCategoriesReducer = (state = reservationCategoriesInitialState, action) => {

  switch (action.type) {
    case 'INIT_RESERVATION_CATEGORIES':
      const categories = action.payload
      return { ...state, reservationCategories: categories };

    case 'INIT_RESERVATION_SERVICES':
      const services = action.payload
      return { ...state, reservationServices: services };

    case 'INIT_RESERVATION_MASTERS':
      const { masters } = action.payload;
      const { serviceId } = action.payload;
      // console.log(serviceId);
      const copyState = { ...state };

      let copyMasters = copyState.reservationMasters
      let copyServiceId = copyState.reservationServiceId

      copyMasters = masters;
      copyServiceId = serviceId

      return { ...state, reservationMasters: copyMasters, reservationServiceId: copyServiceId };

    case 'ADD_RESERVATION_MASTER':
      const masterId = action.payload
      return { ...state, reservationMasterId: masterId };

    default:
      return state
  }
}
