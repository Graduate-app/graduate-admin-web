import { axiosClient } from '../client';
import { IGraduate } from './types';


export const createGraduate = async (graduateInput: Partial<IGraduate>) => {
  const response = await axiosClient.post<IGraduate>('/graduand', graduateInput);

  return response.data;
};
