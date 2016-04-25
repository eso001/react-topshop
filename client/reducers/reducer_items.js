import { FETCH_ITEMS } from '../actions/index';

const INITIAL_STATE = { all: [], item: null};


export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_ITEMS:
      console.log('action payload', action.payload)
      return { ...state, item: action.payload.data};
    default:
      return state;
  }
}