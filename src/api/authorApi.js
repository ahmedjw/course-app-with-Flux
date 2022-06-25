const baseUrl = process.env.REACT_APP_API_URL + "/authors/";
const axios = require("axios");
export const getAuthors = async () => {
  const { data } = axios.get(baseUrl);
  return data;
};
