import { FETCH_USER, UPDATE_USER } from '../actions/types';

const initialState = {
  showItems: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    case UPDATE_USER:
      return {
        ...state,
        showItems: action.payload,
      };
    default:
      return state;
  }
}
