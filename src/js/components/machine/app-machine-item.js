import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';
import { Link } from 'react-router';

class MachineItem extends React.Component {

	constructor() {
		super();
		this.state = {};
	}

	render() {
		let id = this.props.item.id;
		let item = this.props.item;
		return (
			<Col xs={6} sm={4} md={3}>
				<Col xs={12}>
					<h3>{ item.os } { item.os_version }</h3>
					<h4>{ item.browserName } { item.browser_version }</h4>
				</Col>
				<Col xs={6} sm={6} md={6}>
					<Panel width="50%" header="Success" bsStyle="success">{ item.stats.success }</Panel>
				</Col>
				<Col xs={6} sm={6} md={6}>
					<Panel width="50%" header="Fail" bsStyle="danger">{ item.stats.fail }</Panel>
				</Col>
				<Col xs={12}>
					<Link to={ `/machines/${id}`} >Go to mahine</Link>
				</Col>
			</Col>
		)
	}
}

export default MachineItem
