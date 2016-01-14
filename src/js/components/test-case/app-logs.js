import React from 'react';
import { Link } from 'react-router';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Table from 'react-bootstrap/lib/Table';
import Panel from 'react-bootstrap/lib/Panel';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import LogActions from '../../actions/log-action';
import LogsStore from '../../stores/logs-store';

class LogItem extends React.Component {

	constructor() {
		super();
		this.state = {};
	}

	componentWillMount() {
		LogsStore.listen( this.updateLogs.bind( this ) );
		this.setState( LogsStore.getState() );
		this.state = LogActions.fetchLogs( this.props.params.logId );
	}

	componentWillUnmount() {
		LogActions.unlisten( this.updateLogs.bind( this ) );
	}

	updateLogs( state ) {
		this.setState( LogsStore.getState() );
	}

	render() {
		let log = this.state.logs;

		let prepareLog = log.toString();

		prepareLog = prepareLog.replace( /\[31m/g, '<div class="alert alert-danger">' );
		prepareLog = prepareLog.replace( /\[39m/g, '</div>' );

		if( prepareLog.match( /\[32m/g ) ){
			prepareLog = prepareLog.replace( /\[32m/g, '<div class="alert alert-success">' );
			prepareLog += '</div>';
		}

		let test = <ListGroupItem dangerouslySetInnerHTML={{ __html: prepareLog }}></ListGroupItem>

		return (
			<Col xs={12}>
			<h1>sakit sa hilot</h1>
				{test}
			</Col>
		)
	}
}

export default LogItem
