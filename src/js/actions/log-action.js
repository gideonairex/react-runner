'use strict';

import alt from '../alt';
import LogItem from '../sources/log-source';

class LogActions {

	updateLogs( logs ) {
		return logs;
	}

	fetchLogs( options ) {
		return LogItem.fetch( options )
			.then( ( logs ) => {
				this.updateLogs( logs );
			} )
			.catch( ( error ) => {
				this.logsFailed( error );
			} );
	}

	logsFailed( error ) {
		return error;
	}
}

export default alt.createActions( LogActions )
