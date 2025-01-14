import { axiosClient } from '../client';
import { IGraduate } from './types';


export const getGraduates = async () => {
  const response = await axiosClient.get<IGraduate[]>('/graduand',);

  return response.data;
};
