import { shallow } from 'enzyme';
import React from 'react';
import ProductTile from './ProductTile';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useRouteMatch: () => ({ url: '/test' })
}));

describe('ProductTile', () => {
  it('should render', () => {
    const props = {
      product: {
        raw: {
          tpcodesaq: '123'
        }
      },
      type: '',
      cols: null,
      selectProduct: () => {}
    };

    const wrapper = shallow(<ProductTile {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
