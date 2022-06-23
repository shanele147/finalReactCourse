import axios from "axios";
import { API_URL } from "./constant.js";

const APIService = {
  getShortURL: (longURL) => {
    return axios
      .get(`${API_URL}${longURL}`)
      .then((response) => response.data.result);
  },
};

export default APIService;
