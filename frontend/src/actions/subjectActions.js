import * as types from './actionTypes';

export function setSubjectSuccess() {
  return {type: types.SET_SUBJECT};
}

export function setSubject(subject) {
  return function(dispatch) {
    dispatch(setSubjectSuccess());
  };
}
