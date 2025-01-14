import { axiosClient } from '../client';
import { IAdmin } from './types';


export const changePassword = async (newPassword: string) => {
  const response = await axiosClient.put<IAdmin>('/admin/change-password', { newPassword });

  return response.data;
};
