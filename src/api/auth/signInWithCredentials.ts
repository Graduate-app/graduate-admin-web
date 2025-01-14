import { axiosClient } from '../client';
import { IToken } from './types';


export const signInWithCredentials = async (email: string, password: string) => {
  const response = await axiosClient.post<IToken>('/auth/signin', {email, password});

  axiosClient.defaults.headers.common.Authorization = `Bearer ${response.data.accessToken}`;
  return response.data;
};
