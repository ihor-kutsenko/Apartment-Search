import axios from 'axios';

axios.defaults.baseURL = 'https://apt-booking-api.herokuapp.com/';

export const bookApartment = payload => {
  return axios.post('/orders', payload);
};
