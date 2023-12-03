import axios from 'axios';
import Toast from '../utils/toastUtils';
import config from '../global/config';

const api = axios.create({
  baseURL: config.baseUrl + '/api',
  headers: {
    Accept: "application/json",
    "Content-Type": "aplication/json",
  }
});

/* api.interceptors.response.use(
  (response) => {
    return response;
  },p
  (error) => {
    const { message } = error.response.data;

    if(message) {
      Toast.show(message);
    }

    return Promise.reject(error);
  }
); */

export default api;