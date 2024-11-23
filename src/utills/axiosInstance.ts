import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const axiosInstance = axios.create({
  baseURL: "https://d.supidoo.com/api/v2/", // Ensure the base URL is correct
});

// Add request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    NProgress.start(); // Start progress bar

    // Ensure headers are set correctly
    config.headers["Content-Type"] = "application/json";
    config.headers["Accept"] = "application/json";

    // Retrieve token from localStorage
    const token = localStorage.getItem("authToken");
    if (token && token.trim() !== "") {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    NProgress.done();
    console.error("Request error:", error.message);
    return Promise.reject(error);
  }
);

// Add response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    NProgress.done(); // Complete progress bar
    return response;
  },
  (error) => {
    NProgress.done();

    // Debugging response errors
    if (error.response) {
      console.error(
        "Response error:",
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error setting up request:", error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
