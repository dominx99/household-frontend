import axios from 'axios';

const details = JSON.parse(localStorage.getItem('AUTHENTICATION_DETAILS'));

export default axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    Authorization: 'Bearer ' + details.token
  }
});
