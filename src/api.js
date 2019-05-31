import axios from 'axios';

const api = axios.create({
  baseURL: `https://es31-server.appspot.com/six-cities`,
  timeout: 5000,
  withCredentials: true,
});

export default api;
