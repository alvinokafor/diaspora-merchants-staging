import axios from "axios";

const baseURL = "https://diaspora.smartpowerbilling.com/api/";

const axiosInstance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const signUp = (userData: any) =>
  axiosInstance.post("/auth/merchant/register", userData);
export const otps = (userData: any) =>
  axiosInstance.post("/auth/merchant/activate", userData);
export const signIn = (userData: any) =>
  axiosInstance.post("/auth/merchant/login", userData);
export const profile = (userData: any, token: string | null) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return axiosInstance.put("/merchant/profile", userData, { headers });
};
export const contact = (userData: any, token: string | null) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return axiosInstance.put("/merchant/contact", userData, { headers });
};

export const createstore = (userData: any, token: string | null) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return axiosInstance.post("/merchant/store", userData, { headers });
};

export const liststore = (token: string | null) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return axiosInstance.get("/merchant/store?page=1&pageSize=10", { headers });
};

export const liststoreDetail = (id: any, token: string | null) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return axiosInstance.get(`/merchant/store/${id}`, { headers });
};

export const listproductDetail = (id: any, token: string | null) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return axiosInstance.get(
    `/merchant/product?page=1&pageSize=10&storeId=${id}`,
    { headers }
  );
};

export const createProduct = (userData: any, token: string | null) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return axiosInstance.post("/merchant/product", userData, { headers });
};

export default axiosInstance;
