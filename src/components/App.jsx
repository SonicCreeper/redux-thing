import React from 'react';
import data from '../data/studio.json'
import Header from './Header'

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Header />
      </div>
    );
  }
}

export default App;