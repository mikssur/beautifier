
const initialState = {
  reservations: [],
  chagePass: null
}

export const adminRegistrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_RESERVATIONS': {

      return { ...state, reservations: action.payload }
    }

    case 'CHANGE_PASS': {

      return { ...state, chagePass: action.payload }
    }

    default:
      return state;
  }
};

export default adminRegistrationReducer;
