import { connect } from 'react-redux'; // eslint-disable-line
import Component from '../components/Studios.jsx'

const mapStateToProps = state => {
  const props = {
    studios: state.studios,
    keyWords: state.keyWords,
  }
  return props;
};

export default connect(
  mapStateToProps,
  null,
)(Component);

