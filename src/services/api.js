import axios from 'axios';
import Toast from '../utils/toastUtils';

const api = axios.create({
  baseURL: "http://192.168.1.3/bank-api/public/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  }
});

/* api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { message } = error.response.data;

    if(message) {
      Toast.show(message);
    }

    return Promise.reject(error);
  }
); */

export default api;