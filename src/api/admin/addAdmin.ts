import { axiosClient } from '../client';


export const addAdmin = async (email: string, password: string, superAdmin: boolean) => {
  const response = await axiosClient.post('/auth/add-admin', { email, password, superAdmin });

  return response.data;
};
