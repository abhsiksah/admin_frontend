import axios from "axios";
import { BASE_URL } from "./constant";

const Axios = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

export default Axios;
