import axios from "axios";
import { getDataJSON } from "./url/variable/asyncStorage";

// Define base URL
const baseURL = "https://subscription-service-stage-linkup.up.railway.app/";

// Create an Axios instance
const SubService = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
SubService.interceptors.request.use(async (config) => {
  try {
    // Fetch token from storage
    const data = await getDataJSON("login");
    const tokenData = data?.id_token;
    // Add the Authorization header if a token exists
    if (tokenData) {
      config.headers.Authorization = `Bearer ${tokenData}`;
    }
  } catch (error) {
    console.error("Error fetching token:", error);
  }

  return config;
}, (error) => {
  // Handle request error
  return Promise.reject(error);
});

export default SubService;
