import React from 'react';
import { Form, Button, Input, Icon, Slider, Tooltip } from 'antd'

class Filters extends React.Component {

	addKeyWords = (e) => {
    e.preventDefault();
    const { getFieldValue, resetFields } = this.props.form

    this.props.addKeyWords(getFieldValue('keyWords'))
    resetFields('keyWords')
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
        <Button type="primary" key={i} className='key-word' onClick={this.removeKeyWord(item)}>
          <span>{item} </span>
          <Icon type="close" />
        </Button>)}
    </div>

  updatePriceRangeText = (value) => {
    document.querySelector('.slider-text').innerHTML = `Стоимость <span>${value[0]} - ${value[1]}</span>`
  }

  changePriceRange = (value) => {
    this.props.changePriceRange(value)
  }

  render() {
    return (
      
      <div style={{paddingRight: '20%'}}>
      	<Form onSubmit={this.addKeyWords}>
          <Form.Item>
            <Tooltip title='Можно несколько через пробел'>
              {this.props.form.getFieldDecorator('keyWords')(
                <Input 
                  prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                  placeholder="Ключевые слова" 
                  size="large" />
              )}
            </Tooltip>
            {this.showKeyWords()}
          </Form.Item>
      	</Form>
        
        <div className="slider-box">
          <div className='slider-text'>Стоимость <span>1000 - 2000</span></div>
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