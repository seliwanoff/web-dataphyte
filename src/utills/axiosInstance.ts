import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const axiosInstance = axios.create({
  baseURL: "https://mybaseUrl.com", // change the baseUrl
});

axiosInstance.interceptors.request.use(
  (config) => {
    NProgress.start();

    config.headers["Content-Type"] = "application/json";
    config.headers["Accept"] = "application/json";

    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    NProgress.done();
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    NProgress.done();
    return response;
  },
  (error) => {
    NProgress.done();
    return Promise.reject(error);
  }
);

export default axiosInstance;
