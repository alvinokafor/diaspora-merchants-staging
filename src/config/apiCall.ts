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
export const profile = (userData: any, token: string | null) => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return axiosInstance.put('/merchant/profile', userData, { headers });
};
export const contact = (userData: any, token: string | null) => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return axiosInstance.put('/merchant/contact', userData, { headers });
};

export const createstore = (userData: any, token: string | null) => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return axiosInstance.post('/merchant/store', userData, { headers });
};

export const liststore = ( token: string | null) => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return axiosInstance.get('/merchant/store?page=1&pageSize=10', { headers });
};
  
export default axiosInstance;