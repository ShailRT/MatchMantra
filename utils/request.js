import axios from "axios";
// import Config from 'react-native-config';
//TODO get url from env
const API_BASE_URL = "http://www.shaadimantraa.com/api";

// const API_BASE_URL= "https://listicle.deegeehub.com/api/user";

// https://listicle.deegeehub.com/api/user/register

export const request = ({ url, method, data, headers, fullUrl }) => {
  // console.log("api base url :" + process.env.API_BASE_URL);

  return axios({
    method: method || "get",
    // url: `${Config.API_BASE_URL}${url}`,
    url: !fullUrl ? `${API_BASE_URL}${url}` : fullUrl,
    data,
    headers,
  });
};

export const addTokenToAxios = (token) => {
  axios.defaults.headers.Authorization = token;
};
