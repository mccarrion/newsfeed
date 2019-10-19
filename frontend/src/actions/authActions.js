import axios from 'axios';
import { API_URL } from '../constants';
import * as types from './actionTypes';
import sessionApi from './sessionApi';

export function signinSuccess() {
	return { type: types.SIGNIN }
}

export function userSignIn(data) {
	return function(dispatch) {
		return sessionApi.login(data).then(response => {
			localStorage.setItem('id_token', response.data.access);
			dispatch(signinSuccess());
		}).catch(error => {
			throw(error);
		});
	};
}

export function userSignOut() {
	localStorage.removeItem('id_token');
	return {type: types.SIGNOUT}
}
