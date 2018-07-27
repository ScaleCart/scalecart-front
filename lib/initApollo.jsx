import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import fetch from 'isomorphic-unfetch';

let apolloClient = null;

function create(initialState, { cookie } = {}) {
  const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
    fetch,
    credentials: 'include',
  });

  let link = httpLink;

  if (cookie) {
    const authLink = setContext((_, { headers }) => ({
      headers: {
        ...headers,
        cookie,
      },
    }));
    link = authLink.concat(httpLink);
  }

  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    link,
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

export default function initApollo(initialState, options) {
  if (!process.browser) {
    return create(initialState, options);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, options);
  }

  return apolloClient;
}
