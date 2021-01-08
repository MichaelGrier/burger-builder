import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-329ee-default-rtdb.firebaseio.com/'
});

export default instance;