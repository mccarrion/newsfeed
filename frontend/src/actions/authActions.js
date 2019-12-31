import * as types from './actionTypes';
import AuthApi from './authApi';

export function signInSuccess(user) {
	return { type: types.SIGNIN_SUCCESS, user }
}

export function signOutSuccess() {
	return { type: types.SIGNOUT_SUCCESS }
}

export function userSignIn(credentials) {
	return async function(dispatch) {
		const request = await AuthApi.login(credentials);
		let token = request.access;
		const user = await AuthApi.getUser(token);
		localStorage.setItem('id_token', token);
		dispatch(signInSuccess(user));
	};
}

export function userSignOut() {
	return function(dispatch) {
		localStorage.removeItem('id_token');
		dispatch(signOutSuccess());
	};
}
