import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { browserHistory } from 'react-router';


export default function authReducer(state = initialState.auth, action) {
  switch(action.type) {
    case types.SIGNIN_SUCCESS:
      browserHistory.push('/')
      return !!localStorage.getItem('id_token')
    default:
      return state;
  }
}
