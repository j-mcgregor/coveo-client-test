import PropTypes from 'prop-types';
import React from 'react';
import ProductBanner from './sections/ProductBanner';
import SuggestedList from './sections/SuggestedList';

const ShowContainer = ({ results, selected, selectProduct }) => (
  <div>
    <ProductBanner selected={selected} />
    <SuggestedList results={results} selectProduct={selectProduct} />
  </div>
);

ShowContainer.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({})),
  selected: PropTypes.shape({}),
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.string
    })
  }),
  selectProduct: PropTypes.func.isRequired
};

ShowContainer.defaultProps = {
  results: [],
  selected: {},
  match: {}
};

export default ShowContainer;
