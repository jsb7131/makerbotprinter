require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import io from 'socket.io-client';
// import StatusControl from './StatusControl';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			printerMsg: '',
			buttonType: '',
		};

		this.socket = io('ws://localhost:8080');
		this.socket.on('message', (message) => {
			console.log(message);
			this.setState({printerMsg: JSON.stringify(message)});
			this.setButtonType(message);
		});
	}

	setButtonType = msg => {

		if (msg.status.state === 'Idle')
			this.setState({buttonType: 'PRINT'});
	};

	sendAction = () => {
		this.socket.send(this.state.buttonType);
	};

  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        <br/>
        <h1>{ this.state.printerMsg }</h1>
        <button onClick={this.sendAction}>{this.state.buttonType}</button>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
