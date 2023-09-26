import axios from "axios";
import { config } from "../common/utils/config";

const api = axios.create({
  baseURL: config.apibaseUrl,
});

api.interceptors.request.use((config) => {
  const auth = localStorage.getItem("token");
  config.headers["Authorization"] = `Bearer ${auth}`;
  return config;
});

export { api };
