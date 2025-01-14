import AdminApi, { IAdmin } from '@/api/admin';
import { create } from 'zustand';


interface IAdminState {
  admins: IAdmin[];
  loading: boolean;
  error: unknown | null;
  fetchAdmins: () => Promise<void>;
  createAdmin: (email: string, password: string, superAdmin: boolean) => void;
  deleteAdmin: (id: number) => void;
}

export const useAdminStore = create<IAdminState>((set) => ({
  admins: [],
  loading: false,
  error: null,

  fetchAdmins: async () => {
    set({
      loading: true,
      error: null,
    });
    try {
      const response = await AdminApi.getAll();
      if (response) {
        set({
          admins: response,
          loading: false,
        });
      }
    } catch (error) {
      set({
        error,
        loading: false,
      });
    }
  },
  deleteAdmin: async (id) => {
    try {
      const response = await AdminApi.deleteAdmin(id);
      if (response) {
        set((state) => ({
          admins: state.admins.filter((admin) => (admin.id !== id)),
        }));
      }
    } catch (error) {
      set({
        error,
      });
    }
  },
  createAdmin: async (email, password, superAdmin) => {
    try {
      const response = await AdminApi.addAdmin(email, password, superAdmin);
      if (response) {
        const admins = await AdminApi.getAll();
        set({
          admins: admins,
        });
      }
    } catch (error) {
      set({
        error,
      });
    }
  },
}));
