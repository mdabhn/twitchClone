import { combineReducers } from 'redux';
import { reducer } from 'redux-form';
import auth from './authReducer';

export default combineReducers({
  auth: auth,
  form: reducer,
  default: () => 'default',
});
