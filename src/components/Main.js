require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import PrinterControl from './PrinterControl';
import InfoDisplay from './InfoDisplay';
import Buttons from './Buttons';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
          <PrinterControl>
            {({
				printer,
				status,
				currentProcess,
				processMethods,
				hideClasses,
				sendAction
            }) => (
          	  <div id="ui-wrapper">
          	  	<InfoDisplay
          	  		info={printer}
          	  		statusState={status.state}
          	  		currProc={currentProcess}
          	  		classes={hideClasses}
      	  		>
      	  		</InfoDisplay>
          	  	<Buttons
          	  		action={sendAction}
          	  		methods={processMethods}
          	  		classes={hideClasses}
      	  		>
      	  		</Buttons>
	          </div>
	        )}  
          </PrinterControl>
      </div>
    );
  }
}

export default AppComponent;
