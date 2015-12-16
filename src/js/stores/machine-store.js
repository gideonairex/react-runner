import alt from '../alt';
import MachineActions from '../actions/machine-action';

class MachineStore {
	constructor() {
		this.bindListeners( {
			'handleUpdateMachines' : MachineActions.UPDATE_MACHINES,
			'handleFetchMachines'  : MachineActions.FETCH_MACHINES,
			'handleFailedMachines' : MachineActions.MACHINES_FAILED
		} );
		this.state = {
			'vms' : []
		};
	}
	handleUpdateMachines( machines ) {
		this.state.vms = machines;
		this.error = null;
	}
	handleFetchMachines() {
		this.state.vms = [];
	}
	handleFailedMachines( error ) {
		this.error = error;
	}
}

export default alt.createStore( MachineStore, 'MachineStore' )
