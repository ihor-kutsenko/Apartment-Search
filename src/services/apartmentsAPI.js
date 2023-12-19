import axios from 'axios';

axios.defaults.baseURL = 'https://apt-booking-api.herokuapp.com/';

export const getApartmentsList = async () => {
  const { data } = await axios.get('/apartments');
  return data;
};

export const getApartmentById = async id => {
  const { data } = await axios.get(`/apartments/${id}`);
  return data;
};
