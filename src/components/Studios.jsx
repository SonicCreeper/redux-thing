import _ from "lodash"
import React from 'react'
import data from '../data/studio.json'
import { Row, Col } from 'antd'
class Studios extends React.Component {


	renderStudios = (item, index) => {
		const keyWords = this.props.keyWords
		const priceRange = this.props.priceRange
		// проверка на то, что общих ключевых слов у фильтра и студии равно кол-ву слов в фильтре,
		// а также на вхождение цены в диапазон
		if((priceRange[0]>item.price) || (item.price>priceRange[1])){
			return null
		}
		if(keyWords.length) {
			if( (_.intersection(item.params, keyWords).length != keyWords.length)){
				return null;
			}
		}

		return (
		<Col sm={{offset: 7}} md={{span:11, offset:1}} xl={7} key={item.id} id={item.id}>
			<p>{item.name} {item.price}</p>
			<p>{item.params.map((param, i) => <span key={_.uniqueId()}>{param} </span>)}</p>
			<img src={item.view[0]} height="100"/>
		</Col>);
	}

	render() {
		return(
			<Row>{this.props.studios.map(this.renderStudios)}</Row>
		);
	}
}

export default Studios