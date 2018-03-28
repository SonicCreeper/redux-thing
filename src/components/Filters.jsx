import React from 'react';
import { Field, reduxForm } from 'redux-form';

class Filters extends React.Component {
  constructor(props){
    super(props);
    const state = {wordsInput: ''}
  }

	addKeyWords = (e) => {
    console.log('got new words')
    this.props.addKeyWords(e)
    
    this.props.reset()
	}

  clearKeyWords = () => {
    this.props.clearKeyWords();
  }

  render() {
    return (
      <div>
      	<form onSubmit={this.props.handleSubmit(this.addKeyWords)}>
          <div className="form-group mx-3">
            <Field name="text" required component="input" type="text" defaultValue='qwe'/>
          </div>
      	</form>
        <button onClick={this.clearKeyWords}>Очистить фильтр</button>
      </div>
    );
  }
}

export default reduxForm({
  form: 'newKeyWords',
})(Filters);