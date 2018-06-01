import React, { Component } from 'react';
import Test from './components/Test'

import Blog from './containers/Blog/Blog';

class App extends Component {
	hallo = () => {
		console.log('hallo from function')
	}
  render() {
    return (
      <div className="App">
        <Test propss={"big hi from props"} hallo={this.hallo} />
        <Blog />
      </div>
    );
  }
}

export default App;
