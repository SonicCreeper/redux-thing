import React from 'react';
import $ from 'jquery'
import 'jqueryui'
import 'jqueryui/jquery-ui.css'
import 'jqueryui/jquery-ui.structure.css'
import 'jqueryui/jquery-ui.theme.css'
import { Form, Button, Input, Icon, Slider } from 'antd'

class Filters extends React.Component {

	addKeyWords = (e) => {
    e.preventDefault();
    const { getFieldValue, resetFields } = this.props.form
    console.log(getFieldValue('keyWords'))
    this.props.addKeyWords(getFieldValue('keyWords'))
    resetFields('keyWords')
	}

  componentDidMount = () => {
    
  }


  clearKeyWords = () => {
    this.props.clearKeyWords()
  }

  removeKeyWord = word => e => {
    this.props.removeKeyWord(word)
  }

  showKeyWords = () => 
    <div style={{margin: "5px 0 10px 0"}}>
      {this.props.keyWords.map((item,i) => 
        <Button type="primary" key={i} id='keyWord' onClick={this.removeKeyWord(item)}>
          <span>{item} </span>
          <Icon type="close" />
        </Button>)}
    </div>

  updatePriceRangeText = (value) => {
    document.querySelector('#slider-text').innerHTML = `Стоимость <span>${value[0]} - ${value[1]}</span>`
  }

  changePriceRange = (value) => {
    this.props.changePriceRange(value)
  }

  render() {
    return (
      
      <div id="#filter-box">
      	<Form className='test' onSubmit={this.addKeyWords}>
          <Form.Item>
              {this.props.form.getFieldDecorator('keyWords')(
                <Input 
                  prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                  placeholder="Ключевые слова" 
                  size="large" />
              )}
            {this.showKeyWords()}
          </Form.Item>
      	</Form>
        
        <div id="#slider-box">
          <div id='slider-text'>Стоимость <span>1000 - 2000</span></div>
          <Slider 
            range 
            max={3000}
            defaultValue={[1000, 2000]} 
            onChange={this.updatePriceRangeText} 
            onAfterChange={this.changePriceRange} />
        </div>
        
        
      </div>
    );
  }
}

export default Form.create()(Filters);