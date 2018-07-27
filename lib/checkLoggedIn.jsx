import gql from 'graphql-tag';

export default apolloClient => (
  apolloClient.query({
    query: gql`
      query getUser {
        viewer {
          id
          name
        }
      }
    `,
  }).then(({ data }) => ({ loggedInUser: data }))
    .catch(error => ({ loggedInUser: { error } }))
);
