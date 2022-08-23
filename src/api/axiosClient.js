import axios from 'axios';
import queryString from 'query-string';
const baseUrl = 'https://web-shop-sang.herokuapp.com/';



const axiosClient = axios.create({
  baseURL: baseUrl,
  paramsSerializer: (params) => queryString.stringify({ params }),
});

axiosClient.interceptors.request.use(async (config) => {
    return {
      ...config,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  });
  
  axiosClient.interceptors.response.use(
    (response) => {
      if (response && response.data) return response.data;
      return response;
    },
    (err) => {
      if (!err.response) {
        return alert(err);
      }
      throw err.response;
    }
  );
  
  export default axiosClient;
