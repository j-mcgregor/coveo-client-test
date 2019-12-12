import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchResults } from '../../../flux/actions/queryActions';
import Main from './Main';

const mapStateToProps = state => ({
  results: state.results
});

const mapDispatchToProps = dispatch => ({
  fetchResults: query => dispatch(fetchResults(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Main));