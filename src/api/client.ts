import router from '@app/router';
import axios from 'axios';


export const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_BASEPATH}`,
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      router.navigate('/login');
    }
    return Promise.reject(error);
  }
);