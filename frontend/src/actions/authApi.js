import { API_URL } from '../constants';

class AuthApi {
    static login(credentials) {
        const response = fetch(`${API_URL}/auth/jwt/create/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            type:'cors',
            body: JSON.stringify(credentials),
        })
        .then(res => {
            return res.json();
        });
        return response;
    }
}

export default AuthApi;
