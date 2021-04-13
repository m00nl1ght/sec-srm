import axios from 'axios';
import config from '@/config/config.js'

export const HTTP = axios.create({
    baseURL: config.BASE_BACKEND_URL,
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
})