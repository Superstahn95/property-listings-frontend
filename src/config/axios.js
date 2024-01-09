import axios from "axios";

// const axiosInstance = axios.create({ baseURL: "http://localhost:4040/api/v1" });
const axiosInstance = axios.create({
  baseURL: "https://property-listings-api-i6xo.onrender.com/api/v1",
});

export default axiosInstance;
