import { combineReducers } from 'redux';
import { reducer as profileForm } from 'redux-form';
import authReducer from './authReducer';
import itemReducer from './itemReducer';

export default combineReducers({
  auth: authReducer,
  profileInfo: profileForm,
  item: itemReducer,
});
