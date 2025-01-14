import { refreshToken } from './refreshToken';
import { signInWithCredentials } from './signInWithCredentials';

const AuthApi = {
  signInWithCredentials,
  refreshToken,
};

export default AuthApi;

export type * from './types';
