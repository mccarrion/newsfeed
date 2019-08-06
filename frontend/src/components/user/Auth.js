import axios from 'axios';
import decode from 'jwt-decode';
import { API_URL } from '../../constants';

export function isExpired(token) {
    const jwt = decode(token);
    if (jwt.exp < (Date.now() / 1000)) {
        return true;
    }
    return false;
};

export function isAuthenticated() {
    // Getting token from localstorage
    const token = localStorage.getItem('id_token');
    return !!token && !isExpired(token);
};

export const users = axios.create({
    baseURL: `${API_URL}`,
    timeout: 5000,
    headers : {
      Authorization: `JWT ${localStorage.getItem('id_token')}`,
      'Content-Type': 'application/json'
    }
});

export default class fetchSignIn {
    static login(data) {
        const req = fetch(`${API_URL}/auth/jwt/create/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            type:'cors',
            body: JSON.stringify(data),
        })
        .then(res => {
            return res.json();
        });
    }
}
