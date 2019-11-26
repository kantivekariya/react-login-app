import axios from 'axios';

export const userService = {
    getAll
};


function getAll() {
    return axios.post('http://localhost:3600/users');
}