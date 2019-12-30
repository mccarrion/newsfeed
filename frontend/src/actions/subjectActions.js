import * as types from './actionTypes';

export function setSubjectSuccess(subject) {
  return {type: types.SET_SUBJECT, subject};
}

export function setSubject(subject) {
  return function(dispatch) {
    dispatch(setSubjectSuccess(subject));
  };
}
