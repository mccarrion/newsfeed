import { combineReducers } from 'redux';
import auth from './authReducer';
import subjects from './subjectReducer';

const rootReducer = combineReducers({
  auth,
  subjects
});

export default rootReducer;
