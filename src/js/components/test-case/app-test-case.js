import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Table from 'react-bootstrap/lib/Table';
import BrowserstackStore from '../../stores/browserstack-store';
import BrowserstackSessionActions from '../../actions/browserstack-session-action';
import { Link } from 'react-router';
import moment from 'moment';

class TestCase extends React.Component {

	constructor() {
		super();
	}

	componentWillMount() {
		BrowserstackStore.listen( this.updateSession.bind( this ) );
		this.setState( BrowserstackStore.getState() );
		let options = {
			'machineId'  : this.props.params.machine,
			'testCaseId' : this.props.params.testCases,
		};
		BrowserstackSessionActions.fetchBrowserstackSessions( options );
	}

	componentWillUnmount() {
		BrowserstackStore.unlisten( this.updateSession.bind( this ) );
	}

	updateSession ( state ) {
		this.setState( BrowserstackStore.getState() );
	}

	render(){
		// Get machine details
		let testCase = this.props.params.testCases;
		let sessions = this.state.sessions.map( session => {
			return (
				<tr key={session._id}>
					<td> { session._id } </td>
					<td> { session.success } </td>
					<td> { session.fail } </td>
					<td> { moment( session.endTime ).format( 'h:mm:ss a, MMMM Do YYYY' ) } </td>
					<td> { session.duration } </td>
					<td> <a href={ session.browserStackURL } target='_blank'>{ session.browserStackId} </a></td>
				</tr>
			)
		} );
		return (
			<Col xs={12}>
				<h1>Test case {testCase}</h1>
				<Table responsive>
					<thead>
						<tr>
							<th> ID </th>
							<th> Success </th>
							<th> Fail </th>
							<th> End Time </th>
							<th> Duration </th>
							<th> Browserstack Session </th>
						</tr>
					</thead>
					<tbody>
						{ sessions }
					</tbody>
				</Table>
			</Col>
		)
	}
}

export default TestCase
