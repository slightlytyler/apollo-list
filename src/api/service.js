import client from './client';

// Serializing / Deserializing
const deserializeRecord = record => record;

export const deserialize = payload => {
  if (Array.isArray(payload)) return payload.map(deserializeRecord);
  return deserializeRecord(payload);
};

// Methods
export const methods = {
  createRecord: async (endpoint, payload) => {
    const response = await client.post(endpoint, payload);
    return deserialize(response.data);
  },
  updateRecord: async (endpoint, id, payload) => {
    const response = await client.patch(`${endpoint}/${id}`, payload);
    return deserialize(response.data);
  },
  deleteRecord: async (endpoint, id) => {
    const response = await client.delete(`${endpoint}/${id}`);
    return deserialize(response.data);
  },
  fetchRecord: async (endpoint, id) => {
    const response = await client.get(`${endpoint}/${id}`);
    return deserialize(response.data);
  },
  fetchCollection: async (endpoint, queryParams) => {
    const response = await client.get(`${endpoint}`, queryParams);
    return deserialize(response.data);
  },
};

// Constructor
export const createService = config => {
  const endpoint = Array.isArray(config) ? config[1] : config;

  if (typeof endpoint === 'function') {
    return endpointArgs => {
      const options = [endpoint(endpointArgs)];

      return {
        createRecord: payload => methods.createRecord(...options, payload),
        updateRecord: (id, payload) => methods.updateRecord(...options, id, payload),
        deleteRecord: id => methods.deleteRecord(...options, id),
        fetchRecord: id => methods.fetchRecord(...options, id),
        fetchCollection: queryParams => methods.fetchCollection(...options, queryParams),
      };
    };
  }

  const options = [endpoint];

  return {
    createRecord: payload => methods.createRecord(...options, payload),
    updateRecord: (id, payload) => methods.updateRecord(...options, id, payload),
    deleteRecord: id => methods.deleteRecord(...options, id),
    fetchRecord: id => methods.fetchRecord(...options, id),
    fetchCollection: queryParams => methods.fetchCollection(...options, queryParams),
  };
};

export default createService;
