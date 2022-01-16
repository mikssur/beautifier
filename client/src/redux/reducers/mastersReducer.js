import { mastersAT } from '../actionTypes/mastersAT';

// const cats = ''
const mastersInitialState = {
  masters: {}
}

const mastersReducer = (state = mastersInitialState, action) => {

  switch (action.type) {
    case mastersAT.INIT_MASTERS:
      const masters = action.payload.masters
      console.log('!!!!!!!!!!!!MASTERS V REDJUSEREEE!!!!!!!!!!', masters)
      return { ...state, masters: masters };

    default:
      return state
  }

}

export default mastersReducer
