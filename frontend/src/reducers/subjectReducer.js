import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { browserHistory } from 'react-router';

export default function subjectReducer(state = initialState.subject, action) {
    switch(action.type) {
        case types.SET_SUBJECT:
            browserHistory.push(`/${action.subject}`)
            return action.subject
        default:
            return state;
    }
}
