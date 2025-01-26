import GraduateApi, { IGraduate } from '@/api/graduate';
import { create } from 'zustand';


interface IGraduateState {
  graduates: IGraduate[];
  loading: boolean;
  error: unknown | null;
  fetchGraduates: () => Promise<void>;
  updateGraduate: (id: number, data: Partial<IGraduate> & { profilePictureId?: number }) => void;
  applyGraduate: (id: number) => void;
  rejectGraduate: (id: number) => void;
  createGraduate: (data: Partial<IGraduate>) => void;
}

export const useGraduateStore = create<IGraduateState>((set) => ({
  graduates: [],
  loading: false,
  error: null,

  fetchGraduates: async () => {
    set({
      loading: true,
      error: null,
    });
    try {
      const response = await GraduateApi.getGraduates();
      if (response) {
        set({
          graduates: response,
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
  updateGraduate: async (id, data) => {
    try {
      const response = await GraduateApi.updateGraduate(id, data);
      if (response) {
        set((state) => ({
          graduates: state.graduates.map((graduate) => (graduate.id === id
            ? {
              ...graduate,
              ...data,
            }
            : graduate)),
        }));
      }
    } catch (error) {
      set({
        error,
      });
    }
  },
  applyGraduate: async (id) => {
    try {
      const response = await GraduateApi.applyGraduate(id);
      if (response) {
        set((state) => ({
          graduates: state.graduates.map((graduate) => (graduate.id === id
            ? {
              ...graduate,
              status: 'applied',
            }
            : graduate)),
        }));
      }
    } catch (error) {
      set({
        error,
      });
    }
  },
  rejectGraduate: async (id) => {
    try {
      const response = await GraduateApi.rejectGraduate(id);
      if (response) {
        set((state) => ({
          graduates: state.graduates.map((graduate) => (graduate.id === id
            ? {
              ...graduate,
              status: 'rejected',
            }
            : graduate)),
        }));
      }
    } catch (error) {
      set({
        error,
      });
    }
  },
  createGraduate: async (data) => {
    try {
      const response = await GraduateApi.createGraduate(data);
      if (response) {
        set((state) => ({
          graduates: [...state.graduates, response],
        }));
      }
    } catch (error) {
      set({
        error,
      });
    }
  },
}));
