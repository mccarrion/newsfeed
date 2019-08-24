import { combineReducers } from 'redux';
import authReducer from './authReducer';
import subjectReducer from './subjectReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  subject: subjectReducer
});

export default rootReducer;
