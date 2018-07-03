import { connect } from 'react-redux';
import Component from '../components/Filters.jsx'
import * as actionCreators from '../actions';

const mapStateToProps = state => {
  const props = {
    keyWords: state.keyWords,
    priceRange: state.priceRange

  }
  return props;
};

const Container = connect(
  mapStateToProps,
  actionCreators,
)(Component);

export default Container;
