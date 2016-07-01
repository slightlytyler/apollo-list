import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { API_URL } from 'config';

const networkInterface = createNetworkInterface(API_URL);

export const client = new ApolloClient({ networkInterface });

export const middleware = client.middleware();
