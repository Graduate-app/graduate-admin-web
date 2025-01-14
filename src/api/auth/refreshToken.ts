import { axiosClient } from '../client';
import { IToken } from './types';


export const refreshToken = async (refreshToken: string) => {
  const response = await axiosClient.post<IToken>('/auth/refresh', {refreshToken});

  axiosClient.defaults.headers.common.Authorization = `Bearer ${response.data.accessToken}`;
  return response.data;
};
