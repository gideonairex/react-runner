import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import MachineItem from '../machine/app-machine-item';
import MachineStore from '../../stores/machine-store';
import MachineAction from '../../actions/machine-action';

class Dashboard extends React.Component {

	constructor() {
		super();
	}

	componentWillMount() {
		MachineStore.listen( this.updateMachineList.bind( this ) );
		this.setState( MachineStore.getState() );
		MachineAction.fetchMachines();
	}

	componentWillUnmount() {
		MachineStore.unlisten( this.updateMachineList.bind( this ) );
	}

	updateMachineList( state ) {
		this.setState( MachineStore.getState() );
	}

	render(){
		let machines = this.state.vms.map( machine => {
			return <MachineItem key={machine.id} item={machine} />
		} );
		return (
			<Col xs={12}>
				<Row>
					{ machines }
				</Row>
			</Col>
		)
	}
}

export default Dashboard
