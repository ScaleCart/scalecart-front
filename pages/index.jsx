import React from 'react';
import gql from 'graphql-tag';
import Head from '../components/head';
import checkLoggedIn from '../lib/checkLoggedIn';
import { Query } from '../node_modules/react-apollo';
import ProductsListing from '../components/ProductsListing';
import AppHeader from '../components/AppHeader';

const GET_PRODUCTS = gql`
  query products($first: Int, $after: String) {
    products(first: $first, after: $after) {
      total
      edges {
        node {
          id
          name
          sku
          description
          stock
          price
          discountPrice
          mainImage {
            url
          }
          images {
            url
          }
        }
      }
    }
  }
`;

export default class Index extends React.Component {
  static async getInitialProps({ apolloClient }) {
    const { loggedInUser } = await checkLoggedIn(apolloClient);
    return { loggedInUser };
  }

  render() {
    const { loggedInUser } = this.props;
    return (
      <div>
        <Head title="Home" />
        <AppHeader />
        <p className="container">
          {JSON.stringify(loggedInUser) }
        </p>
        <div className="section">
          <Query query={GET_PRODUCTS} variables={{ first: 5 }}>
            {props => <ProductsListing {...props} />}
          </Query>
        </div>
      </div>
    );
  }
}
