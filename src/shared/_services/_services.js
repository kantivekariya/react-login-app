import { config } from '../config/env.config'
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
    return fetch(`${config.apiUrl}/login/`, requestOptions)
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
    return fetch(`${config.apiUrl}/register/`, requestOptions)
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
    return fetch(`${config.apiUrl}/users/`, requestOptions).then(res => res.json());
}

function logout() {
    localStorage.removeItem('user');
}
