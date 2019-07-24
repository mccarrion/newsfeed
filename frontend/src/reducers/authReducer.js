import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { browserHistory } from 'react-router';

const isEmpty = require("is-empty");

export default function authReducer(state = initialState.auth, action) {
  switch(action.type) {
    case types.SIGNIN:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}
