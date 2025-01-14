import { addAdmin } from './addAdmin';
import { changePassword } from './changePassword';
import { deleteAdmin } from './deleteAdmin';
import { getAll } from './getAll';
import { getMe } from './getMe';

const AdminApi = {
  getMe,
  getAll,
  changePassword,
  addAdmin,
  deleteAdmin,
};

export default AdminApi;

export type * from './types';
