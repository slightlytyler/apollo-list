import ApolloClient from 'apollo-client';

export const client = new ApolloClient();

export const middleware = client.middleware();
