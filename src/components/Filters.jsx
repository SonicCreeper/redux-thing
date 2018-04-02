import React from 'react';
import $ from 'jquery'
import 'jqueryui'
import 'jqueryui/jquery-ui.css'
import 'jqueryui/jquery-ui.structure.css'
import 'jqueryui/jquery-ui.theme.css'
import { Field, reduxForm } from 'redux-form';

class Filters extends React.Component {

	addKeyWords = (e) => {
    this.props.addKeyWords(e)
    this.props.reset()
	}

  componentDidMount = () => {
    const sliderEl = $('#slider')
    const priceRange = this.props.priceRange
    sliderEl.slider({
      range: true,
      min: 0,
      max: 3000,
      step: 100,
      values: [ 1000, 2000 ],
      slide: ( event, ui ) => {
        $('#slider-text').text( `Цена от ${ui.values[ 0 ]} до ${ui.values[1]}`);
      },
      change: ( event, ui ) => {
        this.props.changePriceRange(ui.values)
      }
    });
    $('#slider-text').text( `Цена от ${priceRange[0]} до ${priceRange[1]} `);
  }


  clearKeyWords = () => {
    this.props.clearKeyWords()
  }

  removeKeyWord = word => e => {
    e.preventDefault()
    this.props.removeKeyWord(word)
  }

  showKeyWords = () => 
    <div>
      {this.props.keyWords.map((item,i) => 
        <div key={i}>
          <span>{item} </span>
          <a href="#" onClick={this.removeKeyWord(item)}>x</a>
        </div>)}
    </div>

  render() {
    return (
      <div>
      	<form className='test' onSubmit={this.props.handleSubmit(this.addKeyWords)}>
          <div>
            <Field name="text" required component="input" type="text"/>
          </div>
      	</form>

        <div>
          <label id='slider-text'></label>
          <div id="slider" style={{width: 300+'px'}}></div>
        </div>
        
        
        {this.showKeyWords()}
        <button onClick={this.clearKeyWords}>Очистить слова</button>
      </div>
    );
  }
}

export default reduxForm({
  form: 'newKeyWords',
})(Filters);