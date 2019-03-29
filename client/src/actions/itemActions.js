import axios from 'axios';
import { ADD_ITEM } from './types';

export const addItem = itemData => async dispatch => {
  console.log('submitting from addItem action');
  const res = await axios.post('/api/items/lend/new', itemData);
  dispatch({ type: ADD_ITEM, payload: res.data });
};
