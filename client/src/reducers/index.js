import { combineReducers } from 'redux';
import { reducer as profileForm } from 'redux-form';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  profileInfo: profileForm,
});
