import { axiosClient } from '../client';


export const deleteAdmin = async (id: number) => {
  const response = await axiosClient.delete<boolean>('/admin/'+id);

  return response.data;
};
