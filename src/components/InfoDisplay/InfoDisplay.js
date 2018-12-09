require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class InfoDisplay extends React.Component {

  render() {
    return (
      <div className="status-container">
	  	  <h1 className={this.props.classes[0]}>{this.props.info.name}</h1>
	  	  <h3 className={this.props.classes[0]}>{this.props.info.model}</h3>
	  	  <p className={this.props.classes[0]}>Status: {this.props.statusState}</p>
	  	  <p className={this.props.classes[1]}>Step: {this.props.currProc.step}</p>
	  	  <p className={this.props.classes[1]}>Progress: {this.props.currProc.progress}%</p>
	  	  <p className={this.props.classes[1]}>Time Elapsed: {this.props.currProc.elapsed_time / 1000} seconds</p>
	  	  <p className={this.props.classes[1]}>Time Remaining: {this.props.currProc.time_remaining / 1000} seconds</p>
      </div>
    );
  }
}

export default InfoDisplay;
