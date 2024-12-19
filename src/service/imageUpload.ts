import axios from "axios";
import { getDataJSON } from "./url/variable/asyncStorage";

// Define base URL
const baseURL = "https://blob-service-stage-linkup.up.railway.app/";

// Create an Axios instance
const ImageUploadService = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'multipart/form-data'
  },
});

// Add a request interceptor
ImageUploadService.interceptors.request.use(async (config) => {
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

export default ImageUploadService;
