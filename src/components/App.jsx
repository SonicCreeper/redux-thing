import React from 'react';
import Header from './Header'
import Studios from '../containers/Studios'

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Studios />
      </div>
    );
  }
}

export default App;