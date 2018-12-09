import React from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';

let socket = io('ws://localhost:8080');

class PrinterControl extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			printer: {},
			status: {},
			currentProcess: {},
			processMethods: [],
			hideClasses: ['hide', 'hide']
		};

		socket.on('message', (message) => {
			this.setStatus(message);
		});
	};
	

	setStatus = msg => {

		msg = JSON.parse(msg);
        
        if (msg.current_process !== undefined) {
        	this.stateSetter(msg, msg.current_process, msg.current_process.process_methods, ['', '']);
        } else {
        	this.stateSetter(msg, {}, ['PRINT', ''], ['', 'hide']);
        };

	};

	stateSetter = (printer_info, curr_process, proc_methods, hide_toggle) => {
    	this.setState({
    		printer: printer_info,
    		status: printer_info.status,
    		currentProcess: curr_process,
    		processMethods: proc_methods,
    		hideClasses: hide_toggle,
    	});
	};

	sendAction = action => {
		socket.send(action);
	};


	render () {

		const {
			children: renderChildren,
		} = this.props;

		const {
			printer,
			status,
			currentProcess,
			processMethods,
			hideClasses
		} = this.state;

		const {
			sendAction,
		} = this;

		return renderChildren({
			printer,
			status,
			currentProcess,
			processMethods,
			hideClasses,
			sendAction
		});

	};

};

PrinterControl.proptypes = {
	children: PropTypes.func.isRequired,
};

export default PrinterControl;