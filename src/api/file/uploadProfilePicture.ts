import { axiosClient } from "../client";
import { IProfilePicture } from "../graduate";

export const uploadProfilePicture = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await axiosClient.post<IProfilePicture>('/upload-picture', formData);
  return response.data;
};