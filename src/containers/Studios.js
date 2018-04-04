import { connect } from 'react-redux'; // eslint-disable-line
import Component from '../components/Studios.jsx'
import * as actionCreators from '../actions';

const mapStateToProps = state => {
  const props = {
    studios: state.studios,
    keyWords: state.keyWords,
    priceRange: state.priceRange,
  }
  return props;
};

export default connect(
  mapStateToProps,
  actionCreators,
)(Component);

