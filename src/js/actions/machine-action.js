'use strict';

import alt from '../alt';
import MachineSource from '../sources/machine-source';

class MachineActions {

	updateMachines( machines ) {
		return machines;
	}

	fetchMachines() {
		return MachineSource.fetch()
			.then( ( machines ) => {
				this.updateMachines( machines );
			} )
			.catch( ( error ) => {
				this.machinesFailed( error );
			} );
	}

	machinesFailed( error ) {
		return error;
	}
}

export default alt.createActions( MachineActions )
