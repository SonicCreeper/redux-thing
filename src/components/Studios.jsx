import _ from "lodash"
import React from 'react'
import { Row, Col } from 'antd'

class Studios extends React.Component {

	renderStudios = (item, index) => {
		const keyWords = this.props.keyWords
		const priceRange = this.props.priceRange
		// проверка на то, что общих ключевых слов у фильтра и студии равно кол-ву слов в фильтре,
		// а также на вхождение цены в заданный диапазон
		if((priceRange[0]>item.price) || (item.price>priceRange[1])){
			return null
		}
		if(keyWords.length) {
			if( (_.intersection(item.params, keyWords).length !== keyWords.length)){
				return null;
			}
		}

		return (
		<Col sm={{span: 22, offset: 1}} md={{span: 11, offset: 1}} xl={7} key={item.id} >
			<div className='studio-box'>
				<div className="studio-img-box">
					<div className='price'>{item.price} р.</div>
					<div className='studio-img' style={{backgroundImage: `url(${item.view[0]})`}}></div>
				</div>
				<div className='studio-name'>
					<span>{item.name}</span>
				</div>
			</div>
			<div className='studio-words'>
				{item.params.map((param, i) => <a onClick={this.addKeyWord(param)} className="studio-word" key={_.uniqueId()} >{param} </a>)}
			</div>
		</Col>);
	}

	addKeyWord = (word) => (e) => {
		e.preventDefault();
		this.props.addKeyWords(word);
	}

	render() {
		return(
			<Row>{this.props.studios.map(this.renderStudios)}</Row>
		);
	}
}

export default Studios