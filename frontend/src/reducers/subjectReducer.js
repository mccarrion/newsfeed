import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function subjectReducer(state = initialState.subject, action) {
    switch(action.type) {
        case types.CHANGE_SUBJECT:
            return action.subject
        default:
            return state;
    }
}
