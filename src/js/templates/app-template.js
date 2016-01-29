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

		return (
			<Grid>
				<Row>
					<PageHeader>Test Runner Dashboard</PageHeader>
				</Row>
				<Row>
					{ this.props.children }
				</Row>
			</Grid>
		)
	}
}

export default Template
