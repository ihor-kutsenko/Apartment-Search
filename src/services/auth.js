import axios from 'axios';
import store from '../store/store.js';

axios.defaults.baseURL = 'https://apt-booking-api.herokuapp.com/';

axios.interceptors.request.use(
  config => {
    const { token } = store.state.auth;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

export const loginUser = payload => {
  return axios.post('/users/login', payload);
};

export const registerUser = payload => {
  return axios.post('/users/register', payload);
};

export const logOut = () => {
  return axios.post('/users/logout');
};
