import { combineReducers } from 'redux';
import auth from './authReducer';
import subject from './subjectReducer';

const rootReducer = combineReducers({
  auth,
  subject
});

export default rootReducer;
