import { connect } from 'react-redux'; // eslint-disable-line
import Component from '../components/Filters.jsx'
import * as actionCreators from '../actions';

const mapStateToProps = state => {
  const props = {
    keyWords: state.keyWords
  }
  return props;
};

export default connect(
  mapStateToProps,
  actionCreators,
)(Component);

