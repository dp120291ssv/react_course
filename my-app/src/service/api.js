import axios from "axios";
import {API_URL} from "../constatnts"

export default axios.create({
  baseURL: API_URL,
});