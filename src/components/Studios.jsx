import _ from "lodash"
import React from 'react'
import data from '../data/studio.json'

class Studios extends React.Component {


	renderStudios = (item, index) => {
		const keyWords = this.props.keyWords

		if(keyWords.length) {
			if(_.intersection(item.params, keyWords).length != keyWords.length){
				return null;
			}
		}

		return (
		<div key={item.id} id={item.id}>
			<p>{item.name} {item.price}</p>
			<p>{item.params.map((param, i) => <span key={_.uniqueId()}>{param} </span>)}</p>
			<img src={item.view[0]} height="100"/>
		</div>);
	}

	render() {
		return(
			<div>{this.props.studios.map(this.renderStudios)}</div>
		);
	}
}

export default Studios