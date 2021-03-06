import axios from 'axios';
import CONFIG from '@/config/config.js'

export const HTTP = axios.create({
    baseURL: CONFIG.BASE_URL,
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
})