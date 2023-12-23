import axios from 'axios';

axios.defaults.baseURL = 'https://apt-booking-api.herokuapp.com/';

export const loginUser = payload => {
  return axios.post('/users/login', payload);
};
