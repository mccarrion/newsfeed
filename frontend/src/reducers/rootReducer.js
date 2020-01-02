import { combineReducers } from 'redux';
import auth from './authReducer';
import subject from './subjectReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  auth,
  subject,
  user
});

export default rootReducer;
