import React from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';


class StatusControl extends React.Component {

	constructor(props) {
		super(props);
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
	};

	setButtonType = msg => {

		if (msg.status.state === 'Idle')
			this.setState({buttonType: 'PRINT'});
	};

	sendAction = () => {
		this.socket.send(this.state.buttonType);
	};

	render () {

		const {
			children: renderChildren,
		} = this.props;

		const {
			printerMsg,
			buttonType,
		} = this.state;

		const {
			sendAction,
		} = this;

		return renderChildren({
			printerMsg,
			buttonType,
			sendAction,
		});

	};

};

StatusControl.proptypes = {
	children: PropTypes.func.isRequired,
};

export default StatusControl;