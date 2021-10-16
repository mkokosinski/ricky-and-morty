import { ApolloClient, InMemoryCache } from '@apollo/client';

export const baseUrl = 'https://rickandmortyapi.com/graphql';

export const client = new ApolloClient({
  uri: baseUrl,
  cache: new InMemoryCache(),
});
