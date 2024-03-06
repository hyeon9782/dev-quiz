import axios from "axios";
import { BASE_URL } from "../constants/api";

export const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use();

instance.interceptors.response.use();
