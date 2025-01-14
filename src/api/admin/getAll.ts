import { axiosClient } from '../client';
import { IAdmin } from './types';


export const getAll = async () => {
  const response = await axiosClient.get<IAdmin[]>('/admin');

  return response.data;
};
