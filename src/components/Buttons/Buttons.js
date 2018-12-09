require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class Buttons extends React.Component {

  render() {
    return (
      <div id="buttons-container">
  	    <button
  	    	className={this.props.classes[0]}
  	    	onClick={() => this.props.action(this.props.methods[0])}
	    	>
	    	{this.props.methods[0]}
	    	</button>
  	    <button
  	    	className={this.props.classes[1]}
  	    	onClick={() => this.props.action(this.props.methods[1])}
  	    >
  	    {this.props.methods[1]}
  	    </button>
  	  </div>
    );
  }
}

export default Buttons;
