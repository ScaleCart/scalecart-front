import PropTypes from 'prop-types';

const ProductsListing = ({ loading, error, data }) => {
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const { total, edges } = data.products;

  return (
    <div className="container">
      <div className="columns is-multiline is-mobile">
        {edges.map(({ node: product }) => (
          <div key={product.id} className="column is-6-mobile is-4-tablet is-3-desktop is-3-widescreen is-3-fullhd">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt={product.name} />
            <div>
              {product.name}
            </div>
            {product.discountPrice !== null ? product.discountPrice : product.price}
          </div>
        ))}
      </div>
      <div className="section">
        Total Products:
        {' '}
        {total}
      </div>
    </div>
  );
};

ProductsListing.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  data: PropTypes.object,
};

export default ProductsListing;
