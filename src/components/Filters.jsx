import React from 'react';

class Filters extends React.Component {
	addKeyWords = (e) => {
		e.preventDefault()
		console.log(e)
	}

  render() {
    return (
      <div>
      	<form onSubmit={this.addKeyWords}>
      		<input type='text' name='keyWord'/>
      	</form>
      </div>
    );
  }
}

export default Filters;