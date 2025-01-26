import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chatty-api.vercel.app/api",
  withCredentials: true,
});