import React from 'react';
import { Field, reduxForm } from 'redux-form';

class Filters extends React.Component {
	addKeyWords = (e) => {
    this.props.addKeyWords(e)
	}

  render() {
    return (
      <div>
      	<form onSubmit={this.props.handleSubmit(this.addKeyWords)}>
          <div className="form-group mx-3">
            <Field name="text" required component="input" type="text" />
          </div>
      	</form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'newKeyWords',
})(Filters);