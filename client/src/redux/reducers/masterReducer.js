

const initialState = {}

export const masterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MASTERS_FETCH': {

      return {

      };
    }

    default:
      return state;
  }
};

export default masterReducer;
