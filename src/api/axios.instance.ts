/* eslint-disable @typescript-eslint/naming-convention */
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://192.168.1.6:3000",
  headers: {
    "Content-type": "application/json",
  },
});

export default axiosInstance;
