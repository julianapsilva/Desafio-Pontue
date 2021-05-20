import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://desafio.pontue.com.br",
});

axiosInstance.interceptors.request.use(
  function(config) {
    const token = window.localStorage.token;
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export const api = {
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },

  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  delete(endpoint) {
    return axiosInstance.delete(endpoint);
  },
};

export default api;
