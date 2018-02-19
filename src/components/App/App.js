import React, { Component } from 'react';
import Greeting from '../Greeting/app-greeting';


class App extends Component {
  render() {
    return (<Greeting isLoggedIn={true} />);
  }
}

export default App;
