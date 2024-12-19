import axios from "axios";

let baseURL = "https://authentication-service-stage-linkup.up.railway.app/";

let token;

axios.defaults.headers.common["Content-Type"] = "application/json";

const instance = axios.create({
  baseURL,
});

export default instance;