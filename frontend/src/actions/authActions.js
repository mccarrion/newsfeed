import * as types from './actionTypes';
import AuthApi from './authApi';

export function signinSuccess() {
	return { type: types.SIGNIN_SUCCESS }
}

export function userSignIn(credentials) {
	return async function(dispatch) {
		const request = await AuthApi.login(credentials);
		localStorage.setItem('id_token', request.access);
		dispatch(signinSuccess());
	};
}

export function userSignOut() {
	localStorage.removeItem('id_token');
	return {type: types.SIGNOUT_SUCCESS}
}
