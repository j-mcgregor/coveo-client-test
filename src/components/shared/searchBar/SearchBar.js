import PropTypes from 'prop-types';
import React from 'react';
import S from '../../../static/styles';

const SearchBar = ({ value, setValue }) => (
  <S.SearchBar>
    <div className="input-group input-inline">
      <input
        className="form-input"
        type="text"
        placeholder="search"
        value={value}
        onChange={setValue}
      />
      <button className="btn btn-primary input-group-btn" type="submit">
        Search
      </button>
    </div>
  </S.SearchBar>
);

SearchBar.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func
};

SearchBar.defaultProps = {
  value: '',
  setValue: () => {}
};

export default SearchBar;
