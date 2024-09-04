// ApolloClient.js
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { HttpLink } from '@apollo/client/link/http';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://countries.trevorblades.com', // Replace with your GraphQL API endpoint
  }),
  cache: new InMemoryCache(),
});

export default client;
