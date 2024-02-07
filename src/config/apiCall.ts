import axios from 'axios';

const baseURL = 'http://165.227.77.33:8105/api/';

const axiosInstance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const signUp = (userData: any) => axiosInstance.post('/auth/merchant/register', userData);
export const otps = (userData: any) => axiosInstance.post('/auth/merchant/activate', userData);
export const signIn = (userData: any) => axiosInstance.post('/auth/merchant/login', userData);

export default axiosInstance;