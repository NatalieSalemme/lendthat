import axios from 'axios';
import { ADD_ITEM, BROWSE_ITEMS } from './types';

export const addItem = itemData => async dispatch => {
  console.log('submitting from addItem action');
  const res = await axios.post('/api/items/lend/new', itemData);
  dispatch({ type: ADD_ITEM, payload: res.data });
};

export const uploadPhoto = formData => dispatch => {
  console.log('from action creator', formData);
  axios.post('/api/items/lend/photo', formData).then(res => {
    dispatch({
      type: ADD_ITEM,
      payload: res.data,
    });
  });
};

export const browseItems = () => dispatch => {
  console.log('from browse items creator');
  axios.get('/api/items/browse').then(res => {
    dispatch({
      type: BROWSE_ITEMS,
      payload: res.data,
    });
  });
};
