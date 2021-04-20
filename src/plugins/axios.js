import axios from 'axios'
import config from '@/config/config.js'

const HTTP = axios.create({
    baseURL: config.BASE_BACKEND_URL,
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
})

HTTP.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.access_token}`;
    return config;
}, (error) => Promise.reject(error));

export {HTTP}

