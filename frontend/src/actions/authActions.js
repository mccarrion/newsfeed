import * as types from './actionTypes';
import AuthApi from './authApi';

export function signInSuccess() {
	return { type: types.SIGNIN_SUCCESS }
}

export function signOutSuccess() {
	return { type: types.SIGNOUT_SUCCESS }
}

export function userSignIn(credentials) {
	return async function(dispatch) {
		const request = await AuthApi.login(credentials);
		localStorage.setItem('id_token', request.access);
		dispatch(signInSuccess());
	};
}

export function userSignOut() {
	return function(dispatch) {
		localStorage.removeItem('id_token');
		dispatch(signOutSuccess());
	};
}
