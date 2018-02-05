require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import io from 'socket.io-client';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {

  constructor() {
  	super();
    this.socket = io('ws://localhost:8080');
    this.socket.on('message', function(message) {
      console.log(message);
    });
  }

  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
