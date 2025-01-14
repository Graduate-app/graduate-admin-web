import { axiosClient } from '../client';
import { IGraduate } from './types';


export const rejectGraduate = async (id: number) => {
  const response = await axiosClient.put<IGraduate>(`/graduand/reject/${id}`);

  return response.data;
};
