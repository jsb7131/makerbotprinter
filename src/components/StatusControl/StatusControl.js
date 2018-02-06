import React from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';

class StatusControl extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			printerName: '',
			printerModel: '',
			printerStatus: '',
			printerStep: '',
			printerProgress: '',
			printerElapsedTime: '',
			printerTimeRemaining: '',
			buttonTypeLeft: '',
			buttonTypeRight: '',
			buttonLeftClass: 'hide',
			buttonRightClass: 'hide',
		};

		this.socket = io('ws://localhost:8080');

		this.socket.on('message', (message) => {
			this.setStatus(message);
		});
	};

	setStatus = msg => {

		if (msg.current_process === undefined) {
			this.setState({
				printerName: msg.name,
				printerModel: msg.model,
				printerStatus: msg.status.state,
				printerStep: '',
				printerProgress: '',
				printerElapsedTime: '',
				printerTimeRemaining: '',
				buttonTypeLeft: 'PRINT',
				buttonTypeRight: '',
				buttonLeftClass: '',
				buttonRightClass: 'hide',
			});
		} else {
			let curr_proc = msg.current_process;
			let proc_methods = msg.current_process.process_methods;
			this.setState({
				printerName: msg.name,
				printerModel: msg.model,
				printerStatus: msg.status.state,
				printerStep: curr_proc.step,
				printerProgress: curr_proc.progress,
				printerElapsedTime: curr_proc.elapsed_time,
				printerTimeRemaining: curr_proc.time_remaining,
				buttonTypeLeft: proc_methods[0],
				buttonTypeRight: proc_methods[1],
				buttonLeftClass: '',
				buttonRightClass: '',
			});
		};

	};

	sendAction = action => {
		this.socket.send(action);
	};

	render () {

		const {
			children: renderChildren,
		} = this.props;

		const {
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
		} = this.state;

		const {
			sendAction,
		} = this;

		return renderChildren({
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
			sendAction,
		});

	};

};

StatusControl.proptypes = {
	children: PropTypes.func.isRequired,
};

export default StatusControl;