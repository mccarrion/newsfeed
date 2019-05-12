import decode from 'jwt-decode';

export function isExpired(token) {
    try {
        const jwt = decode(token);
        if (jwt.exp < (Date.now() / 1000)) {
            return true;
        }
        return false;
    } catch(err) {
        return false;
    }
}

export default function isAuthenticated() {
    // Getting token from localstorage
    const token = localStorage.getItem('id_token');
    return !!token && !isExpired(token)
};