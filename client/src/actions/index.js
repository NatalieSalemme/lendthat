import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  // console.log('fetching user', res.data);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const updateProfile = profileData => async dispatch => {
  // console.log('updating profile');
  const res = await axios.post('/api/profile', profileData);

  // console.log(profileData);
  // console.log('res data', res.data);
  dispatch({ type: FETCH_USER, payload: res.data });
};
