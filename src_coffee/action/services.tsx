import Axios, {
  type AxiosInstance,
  type AxiosResponse,
  type AxiosError,
  type AxiosHeaders,
  type InternalAxiosRequestConfig
} from 'axios';
import { urlApi } from './config';
import {
  getToken,
  getLocale,
  clearToken,
  getRefreshToken,
  setRefreshToken,
  setToken,
  clearUserInfo,
  clearRefreshToken,
} from '../storage';

/** Create & Config Custom Axios */
const header = {
  accept: 'text/plain',
  'Content-Type': 'application/json-patch+json',
  'Cache-Control': 'no-cache',
};

const axiosInstance: AxiosInstance = Axios.create({
  baseURL: urlApi,
  headers: header,
  timeout: 60000,
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
    try {
      if (!config.headers) {
        config.headers = {} as AxiosHeaders;
      }
      const token = await getToken();
      if (token) {
        (config.headers as AxiosHeaders)['Authorization'] = `Bearer ${token}`;
      }

      const locale = await getLocale();
      let lang = { Code: 'vn' }; // Giá trị mặc định

      if (typeof locale === 'string' && (locale as string).trim() !== '') {
        try {
          lang = JSON.parse(locale);
        } catch (e) {
          console.error('Invalid JSON format in locale:', e);
        }
      }

      (config.headers as AxiosHeaders)['Language'] = lang.Code || 'vn';

      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
// axiosInstance.interceptors.response.use(
//   (response: AxiosResponse) => response,
//   async (error: AxiosError) => {
//     const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       try {
//         const tokenRefresh = await getRefreshToken();
//         if (tokenRefresh) {
//           const result: PostRequestResponse<any> = await postRequest('api/AuthenticationEmployer/RefreshToken', { RefreshToken: tokenRefresh });
//           const data = result.status ? result.data : null;
//           if (data) {
//             await setToken(data.Token);
//             await setRefreshToken(data.RefreshToken);
//           } else {
//             await clearToken();
//             await clearRefreshToken();
//             await clearUserInfo();
//           }
//         }
//         return axiosInstance(originalRequest);
//       } catch (refreshError) {
//         return Promise.reject(refreshError);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

interface PostRequestResponse<T = any> {
  status: boolean;
  data: T;
  message: string;
  errorCode: string;
}

export const postRequest = async <T extends any>(path: string, body?: any): Promise<PostRequestResponse<T>> => {

  try {
    const response = await axiosInstance.post(path, body, { headers: header });
    const res = response.data;

    let status = false;
    let data = res?.Result;
    let message = res?.Message;
    let errorCode = res?.ErrorCode;

    if (res && res.StatusCode === 200 && res.ErrorCode === '0' && res.Result) {
      status = true;
    }
    return {
      status,
      data,
      message,
      errorCode,
    };
  } catch (error: any) {
    console.error('Error Data Undefined', error);
    return {
      status: false,
      data: null as unknown as T,
      message: error.message || 'Unknown error',
      errorCode: 'UNEXPECTED_ERROR',
    };
  }
};

export const getRequest = async <T extends any>(path: string): Promise<PostRequestResponse<T>> => {
  try {
    const response = await axiosInstance.get(path, { headers: header });
    const res = response.data;

    return {
      status: true, 
      data: res as T, 
      message: 'Request successful',
      errorCode: '0',
    };
  } catch (error: any) {
    console.error('Error Data Undefined', error);
    return {
      status: false,
      data: null as unknown as T,
      message: error.message || 'Unknown error',
      errorCode: 'UNEXPECTED_ERROR',
    };
  }
};

