import axios from "axios";

const baseURL = "https://diaspora.smartpowerbilling.com/api/";

interface IStore {
  _id: string;
  merchantId: string;
  name: string;
  currency: string;
  status: string;
  openingTime: null;
  closeTime: null;
  location: string;
  category: string;
  subCategory: string;
  createdAt: string;
  updatedAt: string;
}

interface IProduct {
  _id: string;
  storeId: string;
  name: string;
  description: string;
  currency: string;
  price: 630;
  quantity: 2;
  imgUrl: string;
  createdAt: string;
  updatedAt: string;
}
export interface IOrder {
  _id: string;
  createdAt: string;
  store: IStore;
  product: IProduct;
  order: {
    _id: string;
    userId: string;
    transactionId: string;
    reference: string;
    status: string;
    address: string;
    statusHistory: [
      {
        status: string;
        _id: string;
      },
      {
        status: string;
        _id: string;
      }
    ];
    createdAt: string;
    updatedAt: string;
  };
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  orderAddress: string;
  productName: string;
  price: number;
  orderRef: string;
}

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

export const getOrders = (token: string | null) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return axiosInstance.get("/merchant/orders?page=1&pageSize=10", {
    headers,
  });
};

export default axiosInstance;
