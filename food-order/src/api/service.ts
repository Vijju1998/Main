import axios from 'axios';
export const apiClient = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: false,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bear token',
  },
});
