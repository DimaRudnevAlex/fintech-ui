import axios from 'axios';

import { authCookieService } from '@/(shared)/lib/auth/auth-cookie';

const axiosInstance = axios.create({
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers['Authorization'] =
    `Bearer ${authCookieService.getAccessToken()}`;

  return config;
});

export default axiosInstance;
