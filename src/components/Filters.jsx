import React from 'react';
import { Field, reduxForm } from 'redux-form';

class Filters extends React.Component {
  constructor(props){
    super(props);
    const state = {wordsInput: ''}
  }

	addKeyWords = (e) => {
    this.props.addKeyWords(e)
    this.props.reset()
	}

  clearKeyWords = () => {
    this.props.clearKeyWords();
  }

  showKeyWords = () => 
    <div>
      {this.props.keyWords.map((item,i) => <div key={i}>{item}</div>)}
    </div>

  render() {
    return (
      <div>
      	<form onSubmit={this.props.handleSubmit(this.addKeyWords)}>
          <div className="form-group mx-3">
            <Field name="text" required component="input" type="text"/>
          </div>
      	</form>
        <div>
          {this.showKeyWords()}
        </div>
        <button onClick={this.clearKeyWords}>Очистить фильтр</button>
      </div>
    );
  }
}

export default reduxForm({
  form: 'newKeyWords',
})(Filters);