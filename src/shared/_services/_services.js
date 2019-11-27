import { BehaviorSubject } from 'rxjs';
import { authHeader } from '../_helpers/auth-header';
const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')));
export const authenticationService = {
    login,
    logout,
    register,
    getAll,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() { return currentUserSubject.value }
};

function login(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    return fetch(`http://localhost:3600/login/`, requestOptions)
        .then(res => res.json())
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    return fetch(`http://localhost:3600/register/`, requestOptions)
        .then(res => res.json())
        .then(user => {
            return user;
        });
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`http://localhost:3600/users/`, requestOptions).then(res => res.json());
}

function logout() {
    localStorage.removeItem('user');
}
