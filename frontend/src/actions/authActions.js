import axios from 'axios';
import { API_URL } from '../../constants';
import { SIGNIN } from './actionTypes';

export const userSignIn = userData => dispatch => {
	axios.post(`${API_URL}/auth/jwt/create/`, userData)
		.then( res => {
			localStorage.setItem('id_token', res.data.access);
		});
}
