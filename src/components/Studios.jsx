import React from 'react'
import data from '../data/studio.json'

class Studios extends React.Component {
	renderStudios = (item) => {
		console.log(item)
		return (
		<div id={item.id}>
			<p>{item.name} {item.price}</p>
			<p>{item.params.map((param, i) => <span key={i}>{param} </span>)}</p>
			<img src={item.view[0]} height="100"/>
		</div>)
	}

	render() {
		return(
			<div>{data.studios.map(this.renderStudios)}</div>
		);
	}
}

export default Studios