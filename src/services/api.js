import axios from 'axios';

const api = axios.create({
    URL: process.env.REACT_APP_API_URL,
})

export default api;