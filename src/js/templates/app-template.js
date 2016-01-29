import React from 'react';
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb';
import BreadcrumbItem from 'react-bootstrap/lib/BreadcrumbItem';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import PageHeader from 'react-bootstrap/lib/PageHeader';

class Template extends React.Component {

	constructor() {
		super();
		this.state = {};
	}

	render() {
		let breadcrumbs = [];

		// Default Breadcrumb
		breadcrumbs.push(
			<BreadcrumbItem href="#" key={0}>
				Dashboard
			</BreadcrumbItem>
		);

		// Iteration for Breadcrumbs
		for( let key in this.props.params ) {
			let id = this.props.params[ key ];
			let link = '';
			let linkName = '';
			if ( key === 'machine' ) {
				let machine = id;
				link += '#/machines/' + machine;
				linkName += 'Machine: ' + machine;
			} else if ( key === 'testCases' ) {
				let testCase = id;
				link += '#/machines/' + this.props.params.machine + '/test-cases/' + testCase;
				linkName += 'Test case: ' + testCase;
			} else if ( key === 'logId' ) {
				let log = id;
				link += '#/machines/' + this.props.params.machine + '/test-cases/' + this.props.params.testCases + '/logs/' + log;
				linkName += 'Log: ' + log;
			}
			breadcrumbs.push( <BreadcrumbItem href={link} key={ `${id}${key}` }>
											 {linkName}
											 </BreadcrumbItem>);
		}

		return (
			<Grid>
				<Row>
					<PageHeader>Test Runner Dashboard</PageHeader>
				</Row>
				<Row>
					<Col xs={12}>
						<Breadcrumb>
							{breadcrumbs}
						</Breadcrumb>
					</Col>
				</Row>
				<Row>
					{ this.props.children }
				</Row>
			</Grid>
		)
	}
}

export default Template
