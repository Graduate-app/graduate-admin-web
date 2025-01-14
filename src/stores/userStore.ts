import { create } from 'zustand';
import {
  ACCESS_TOKEN_ITEM,
  EXPIRE_ACCESS_TOKEN_DATE_ITEM,
  EXPIRE_REFRESH_TOKEN_DATE_ITEM,
  REFRESH_TOKEN_ITEM,
} from '@consts';
import AuthApi, { IToken } from '@/api/auth';
import { axiosClient } from '@/api/client';
import { handleTimeConversions } from '@utils';
import AdminApi from '@/api/admin';


interface IStore {
  user: {
    email: string;
    superAdmin: boolean;
    accessToken: string;
    refreshToken: string;
    expireAccessToken: string;
    expireRefreshToken: string;
  } | null;
  authError: boolean;
  signInWithCredentials: (email: string, password: string) => Promise<boolean>;
  recoverFromLocalStorage: () => Promise<boolean>;
  logOut: () => void;
}

const saveTokensInLocalStorage = (tokens: IToken) => {
  localStorage.setItem(ACCESS_TOKEN_ITEM, tokens.accessToken);
  localStorage.setItem(REFRESH_TOKEN_ITEM, tokens.refreshToken);
  localStorage.setItem(
    EXPIRE_ACCESS_TOKEN_DATE_ITEM,
    tokens.expireAccessToken
  );
  localStorage.setItem(
    EXPIRE_REFRESH_TOKEN_DATE_ITEM,
    tokens.expireRefreshToken
  );
};

const removeTokensFromLocalStorage = () => {
  localStorage.removeItem(ACCESS_TOKEN_ITEM);
  localStorage.removeItem(REFRESH_TOKEN_ITEM);
  localStorage.removeItem(EXPIRE_ACCESS_TOKEN_DATE_ITEM);
  localStorage.removeItem(EXPIRE_REFRESH_TOKEN_DATE_ITEM);
};

const getTokensFromLocalStorage = (): IToken => ({
  accessToken: localStorage.getItem(ACCESS_TOKEN_ITEM) ?? '',
  refreshToken: localStorage.getItem(REFRESH_TOKEN_ITEM) ?? '',
  expireAccessToken: localStorage.getItem(EXPIRE_ACCESS_TOKEN_DATE_ITEM) ?? '',
  expireRefreshToken:
    localStorage.getItem(EXPIRE_REFRESH_TOKEN_DATE_ITEM) ?? '',
});

export const useUserStore = create<IStore>((set) => ({
  user: null,
  authError: false,
  signInWithCredentials: async (email: string, password: string) => {
    try {
      const tokens = await AuthApi.signInWithCredentials(email, password);
      const me = await AdminApi.getMe();

      tokens.expireAccessToken = handleTimeConversions(tokens.expireAccessToken).toString();
      tokens.expireRefreshToken = handleTimeConversions(tokens.expireRefreshToken).toString();

      set({
        user: {
          ...tokens,
          email: me.email,
          superAdmin: me.superAdmin,
        },
      });
      saveTokensInLocalStorage(tokens);

      return true;
    } catch (e) {
      console.error(e);
      set({
        authError: true,
      });

      return false;
    }
  },
  recoverFromLocalStorage: async () => {
    try {
      const dateNow = new Date();
      const tokens = getTokensFromLocalStorage();
      const expireAccessTokenDate = new Date(tokens.expireAccessToken);

      if (expireAccessTokenDate > dateNow) {
        axiosClient.defaults.headers.common.Authorization = `Bearer ${tokens.accessToken}`;
        const me = await AdminApi.getMe();

        set({
          user: {
            ...tokens,
            email: me.email,
            superAdmin: me.superAdmin,
          },
        });

        return true;
      }

      if (expireAccessTokenDate < dateNow) {
        const newTokens = await AuthApi.refreshToken(tokens.refreshToken);
        const me = await AdminApi.getMe();

        newTokens.expireAccessToken = handleTimeConversions(newTokens.expireAccessToken).toString();
        newTokens.expireRefreshToken = handleTimeConversions(newTokens.expireRefreshToken).toString();

        set({
          user: {
            ...newTokens,
            email: me.email,
            superAdmin: me.superAdmin,
          },
        });

        saveTokensInLocalStorage(newTokens);

        return true;
      }

      set({
        user: null,
      });
      removeTokensFromLocalStorage();
      return false;
    } catch (e) {
      console.error(e);
      return false;
    }
  },
  logOut: () => {
    set({
      user: null,
    });
    axiosClient.defaults.headers.common.Authorization = '';
    removeTokensFromLocalStorage();
  },
}));
