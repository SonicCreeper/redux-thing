import React from 'react';
import Header from './Header'
import Studios from '../containers/Studios'
import Filters from './Filters'

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Filters />
          <Studios />
      </div>
    );
  }
}

export default App;