import actionTypes from '../constants';

// eslint-disable-next-line import/prefer-default-export
export const fetchResults = query => ({
  type: actionTypes.FETCH_QUERY,
  payload: query
});