import { axiosClient } from '../client';
import { IAdmin } from './types';


export const getMe = async () => {
  const response = await axiosClient.get<IAdmin>('/admin/me');

  return response.data;
};
