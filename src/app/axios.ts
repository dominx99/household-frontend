import axios from 'axios';

const details = localStorage.getItem('AUTHENTICATION_DETAILS');
const parsedDetails = JSON.parse(details ? details : '{}');

export default axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    Authorization: 'Bearer ' + (typeof parsedDetails.token === 'string' ? parsedDetails.token : ''),
  }
});
