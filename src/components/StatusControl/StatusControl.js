import React from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';


class StatusControl extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			printerMsg: '',
			buttonTypeLeft: '',
			buttonTypeRight: '',
			buttonRightClass: '',
		};

		this.socket = io('ws://localhost:8080');
		this.socket.on('message', (message) => {
			this.setState({printerMsg: JSON.stringify(message)});
			this.setButtonTypes(message);
		});
	};

	setButtonTypes = msg => {

		if (msg.current_process === undefined) {
			this.setState({buttonTypeLeft: 'PRINT', buttonTypeRight: '', buttonRightClass: 'hide'});
		} else {
			let proc_methods = msg.current_process.process_methods;
			this.setState({buttonTypeLeft: proc_methods[0], buttonTypeRight: proc_methods[1], buttonRightClass: ''});
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
			printerMsg,
			buttonTypeLeft,
			buttonTypeRight,
			buttonRightClass,
		} = this.state;

		const {
			sendAction,
		} = this;

		return renderChildren({
			printerMsg,
			buttonTypeLeft,
			buttonTypeRight,
			buttonRightClass,
			sendAction,
		});

	};

};

StatusControl.proptypes = {
	children: PropTypes.func.isRequired,
};

export default StatusControl;