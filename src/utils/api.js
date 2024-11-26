import axios from 'axios';

const api = axios.create({
    // baseURL: 'localhost:3000/api/auth/login',
     baseURL: 'http://localhost:8000/api/auth/', // Correct base URL
});


export const logoutApi = () =>
    api.post('/logout', {}, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
    });


export default api;
