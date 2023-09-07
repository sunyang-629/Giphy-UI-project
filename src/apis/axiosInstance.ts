import axios from "axios";

const axiosInstance = axios.create({
  //todo will set the base URL as an env variable /
  baseURL: import.meta.env.VITE_GIPHY_API_URL,
});

//** Set an axios instance here for handling request or response in the future /
//** eg set the bear token or handle the error response */
axiosInstance.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      console.log("do something ...");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
