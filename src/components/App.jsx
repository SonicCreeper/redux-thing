import React from 'react';
import Logo from './Logo'
import Studios from '../containers/Studios'
import Filters from '../containers/Filters'
import { Layout, Input, Icon, Row, Col } from 'antd'

import 'antd/dist/antd.css';
import '../styles/App.css'

class App extends React.Component {
  render() {
    return (
    	<Layout>

	    	<Row type="flex" justify="center" style={{padding: '20px 0 60px 0'}}>
	    		<Logo/>
	    	</Row>
	    	<Row>
	    		<Col sm={15} md={18}><Studios /></Col>
	    		<Col sm={9} md={6}><Filters /></Col>
	    	</Row>

	    </Layout>


      /*<Layout style={{backgroundColor: "#fff"}}>

	      <Layout.Header>
	    		<Logo />
	    	</Layout.Header>
      	<Layout.Content>
          <Studios />
      	</Layout.Content>
      	<Layout.Sider>
      		<Filters />
      	</Layout.Sider>
          
      </Layout>*/
    );
  }
}

export default App;