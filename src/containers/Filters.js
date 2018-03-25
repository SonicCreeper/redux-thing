import { connect } from 'react-redux'; // eslint-disable-line
import Component from '../components/Filters.jsx'
import * as actionCreators from '../actions';

const mapStateToProps = state => {
  const props = {
    keyWords: state.keyWords
  }
  return props;
};
console.log(actionCreators)
const Container = connect(
  mapStateToProps,
  actionCreators,
)(Component);

export default Container;