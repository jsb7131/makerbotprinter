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
          <StatusControl>
            {({
				printerName,
				printerModel,
				printerStatus,
				printerStep,
				printerProgress,
				printerElapsedTime,
				printerTimeRemaining,
            	buttonTypeLeft,
            	buttonTypeRight,
            	buttonLeftClass,
            	buttonRightClass,
            	sendAction
            }) => (
          	  <div id="ui-wrapper">
          	  	<div id="status-container">
	          	  <h1 className={buttonLeftClass}>{printerName}</h1>
	          	  <h3 className={buttonLeftClass}>{printerModel}</h3>
	          	  <p className={buttonLeftClass}>Status: {printerStatus}</p>
	          	  <p className={buttonRightClass}>Step: {printerStep}</p>
	          	  <p className={buttonRightClass}>Progress: {printerProgress}%</p>
	          	  <p className={buttonRightClass}>Time Elapsed: {printerElapsedTime / 1000} seconds</p>
	          	  <p className={buttonRightClass}>Time Remaining: {printerTimeRemaining / 1000} seconds</p>
          	    </div>
          	    <div id="buttons-container">
	          	  <button className={buttonLeftClass} onClick={() => sendAction(buttonTypeLeft)}>{buttonTypeLeft}</button>
	          	  <button className={buttonRightClass} onClick={() => sendAction(buttonTypeRight)}>{buttonTypeRight}</button>
	          	</div>  
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
