import { BROWSE_ITEMS } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case BROWSE_ITEMS:
      return action.payload;
    default:
      return state;
  }
}
