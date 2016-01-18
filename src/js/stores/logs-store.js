import alt from '../alt';
import LogActions from '../actions/log-action';

class LogsStore {
	constructor() {
		this.bindListeners( {
			'handleUpdateLogs' : LogActions.UPDATE_LOGS,
			'handleFetchLogs'  : LogActions.FETCH_LOGS,
			'handleFailedLogs' : LogActions.LOGS_FAILED
		} );

		this.state = {
			'logs' : [],
			'stdout' : []
		};
	}
	handleUpdateLogs( data ) {
		this.state.logs = data;
		this.error = null;
	}

	handleFetchLogs() {
		this.state.logs = [];
	}

	handleFailedLogs( error ) {
		this.error = error;
	}

}

export default alt.createStore( LogsStore, 'LogsStore' )
