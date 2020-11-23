import axios from 'axios';

const instance = axios.create({
    baseURL:'http://localhost:5001/banglarbiponi-20e27/us-central1/api'
});

export default instance;