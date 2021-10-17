import apiHelpers from './apiHelpers';

export const baseUrl = 'https://rickandmortyapi.com/graphql';

const baseHeaders = { 'Content-Type': 'application/json' };

const post = (query: string, variables?: any) => {
  const requestOptions = {
    method: 'POST',
    headers: baseHeaders,
    body: JSON.stringify({ query, variables }),
  };
  return fetch(baseUrl, requestOptions).then(apiHelpers.handleResponse);
};

export default {
  post,
};
