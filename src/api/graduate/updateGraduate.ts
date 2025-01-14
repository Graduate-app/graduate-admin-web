import { axiosClient } from '../client';
import { IGraduate } from './types';


export const updateGraduate = async (id: number, graduateInput: Partial<IGraduate>) => {
  const response = await axiosClient.put<IGraduate>(`/graduand/${id}`, graduateInput);

  return response.data;
};
