import { kebabCase } from 'lodash';
import client from 'api/client';
import { JWT_KEY } from 'config';

export const fetchRecord = async () => {
  const response = await client.get('users/self');
  return response.data;
};

const getJWTFromResponse = response => response.headers[kebabCase(JWT_KEY)];

const createUserFromResponse = response => ({
  ...response.data,
  token: getJWTFromResponse(response),
});

export const login = async credentials => {
  const response = await client.post('auth/login', credentials);
  return createUserFromResponse(response);
};

export const logout = async () => {
  await client.post('auth/logout');
  return true;
};

export const signUp = async attrs => {
  const response = await client.post('auth/sign-up', attrs);
  return createUserFromResponse(response);
};
