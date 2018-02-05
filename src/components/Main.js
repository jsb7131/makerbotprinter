require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import StatusControl from './StatusControl';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        <br/>
          <StatusControl>
            {({printerMsg, buttonType, sendAction}) => (
          	  <div>
	          	<h1>{ printerMsg }</h1>
	          	<button onClick={sendAction}>{buttonType}</button>
	          </div>
	        )}  
          </StatusControl>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
