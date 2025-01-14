import { axiosClient } from '../client';
import { IGraduate } from './types';


export const applyGraduate = async (id: number) => {
  const response = await axiosClient.put<IGraduate>(`/graduand/apply/${id}`);

  return response.data;
};
