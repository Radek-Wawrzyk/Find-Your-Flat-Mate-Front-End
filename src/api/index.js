import axios from 'axios';

// Base configuration of Axios instance
const request = axios.create({
  baseURL: 'API_URL',
  validateStatus: status => {
    return status >= 200 && status < 300;
  },
});

export default request;
