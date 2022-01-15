
const initialState = { masters: [] }

export const masterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_MASTERS': {

      return { ...state, masters: action.payload }
    }

    default:
      return state;
  }
};

export default masterReducer;
