import React from 'react';
import Logo from './Logo'
import Studios from '../containers/Studios'
import Filters from '../containers/Filters'
import { Row, Col } from 'antd'

import 'antd/dist/antd.css';
import '../styles/App.css'

class App extends React.Component {
  render() {
    return (
    	<div>
	    	<Row type="flex" justify="center" style={{padding: '20px 0 60px 0'}}>
	    		<Logo/>
	    	</Row>
	    	<Row>
	    		<Col sm={15} md={17}><Studios /></Col>
	    		<Col sm={9} md={{span:6, offset: 1}}><Filters /></Col>
	    	</Row>
	    </div>
    );
  }
}

export default App;