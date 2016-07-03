// JWT Handling
let token;
export const registerToken = newToken => { token = newToken; };
export const clearToken = () => { token = undefined; };

// HTTP config
import path from 'path';
import axios from 'axios';
import { API_URL, JWT_KEY } from 'config';

const baseUrl = API_URL;
const apiBaseUrl = baseUrl;
const authBaseUrl = path.join(baseUrl, 'auth');

const buildUrl = url => `http://${url}`;

export const buildApiUrl = endpoint => (
  buildUrl(path.join(apiBaseUrl, endpoint))
);

export const buildAuthUrl = endpoint => (
  buildUrl(path.join(authBaseUrl, endpoint))
);

export const buildResourceUrl = buildApiUrl;

export const buildHeaders = (headers = {}) => {
  if (token) {
    return { [JWT_KEY]: token, ...headers };
  }

  return headers;
};

// Methods
export const methods = {
  get: (endpoint, queryParams) => axios.get(buildApiUrl(endpoint), {
    headers: buildHeaders(),
    params: queryParams,
  }),
  post: (endpoint, payload) => (
    axios.post(buildApiUrl(endpoint), payload, {
      headers: buildHeaders(),
    })
  ),
  put: (endpoint, payload) => (
    axios.put(buildApiUrl(endpoint), payload, {
      headers: buildHeaders(),
    })
  ),
  patch: (endpoint, payload) => (
    axios.patch(buildApiUrl(endpoint), payload, {
      headers: buildHeaders(),
    })
  ),
  delete: endpoint => (
    axios.delete(buildApiUrl(endpoint), {
      headers: buildHeaders(),
    })
  ),
  authorize: payload => axios.post(buildAuthUrl('local/login'), payload),
  unauthorize: () => axios.get(buildAuthUrl('logout'), {
    headers: buildHeaders(),
  }),
};

export default { ...methods, registerToken, clearToken };
