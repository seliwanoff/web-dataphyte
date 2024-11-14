import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://your-api-url.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
