import React from 'react';
import { Link } from 'react-router';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Table from 'react-bootstrap/lib/Table';
import Panel from 'react-bootstrap/lib/Panel';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import TestCaseStore from '../../stores/test-case-store';
import TestCaseAction from '../../actions/test-case-action';
import io from 'socket.io-client';
import config from '../../config';

class Machine extends React.Component {

	constructor() {
		super();
		this.socket = io( config.ws );
	}

	componentWillMount() {
		this.socket.on( 'browserstack-data-stream', ( data ) => {
			console.log(this.props.params.machine);
			console.log(data);
			if( data.machineId === this.props.params.machine ) {
				let dataText = data.data.trim();
				if( dataText ) {
					this.state.stdout.push( data );
					this.setState( {
						'stdout' : this.state.stdout
					} );
				}
			}
		} );
		TestCaseStore.listen( this.updateTestCaseList.bind( this ) );
		this.setState( TestCaseStore.getState() );
		let options = {
			'machineId' : this.props.params.machine
		};
		TestCaseAction.fetchTestcases( options );
	}

	componentWillUnmount() {
		TestCaseStore.unlisten( this.updateTestCaseList.bind( this ) );
	}

	updateTestCaseList( state ) {
		this.setState( TestCaseStore.getState() );
	}

	render(){
		// Get machine details
		let machine  = this.props.params.machine;
		let testCases = this.state.testCases.map( testCase => {
			return (
				<tr key={testCase._id}>
					<td> <Link to={ `machines/${machine}/test-cases/${testCase._id}` }>{ testCase._id } </Link></td>
					<td> { testCase.success } </td>
					<td> { testCase.fail } </td>
				</tr>
			)
		} );

		let test = this.state.stdout.map( stdout => {
			let string = stdout.data;
			string = string.replace( /\[31m/g, '<div class="alert alert-danger">' );
			string = string.replace( /\[39m/g, '</div>' );

			if( string.match( /\[32m/g ) ){
				string = string.replace( /\[32m/g, '<div class="alert alert-success">' );
				string += '</div>';
			}
			return (
				<ListGroupItem dangerouslySetInnerHTML={{ __html: string }}></ListGroupItem>
			)
		} );

		return (
			<Col xs={12}>
				<h1>Machine {machine}</h1>
				<Table responsive>
					<thead>
						<tr>
							<th> Test case ID </th>
							<th> Success </th>
							<th> Fail </th>
						</tr>
					</thead>
					<tbody>
						{ testCases }
					</tbody>
				</Table>
				<Panel collapsible defaultExpanded header="Running Test">
					<ListGroup fill>
						{ test }
					</ListGroup>
				</Panel>
			</Col>
		)
	}
}

export default Machine
