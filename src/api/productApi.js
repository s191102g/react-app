import axiosClient from './axiosClient';

const productApi = {
  getProduct: (params) => axiosClient.get('/api-prd', params),
  addProduct: (params) => axiosClient.post('/api-prd', params),
  removeProduct: (params) => axiosClient.delete(`/api-prd/${params}`),
  getOneProduct: (params) => axiosClient.get(`/api-prd/${params}`),
  fixProduct: (params) => axiosClient.put(`/api-prd/${params.id}`,params.data),
};

export default productApi;