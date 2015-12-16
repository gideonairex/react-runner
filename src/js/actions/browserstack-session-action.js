'use strict';

import alt from '../alt';
import BrowserstackSource from '../sources/browserstack-source';

class BrowserstackSessionActions {

	updateBrowserstackSessions ( sessions ) {
		return sessions;
	}

	fetchBrowserstackSessions( options ) {
		return BrowserstackSource
			.fetch( options )
			.then( ( sessions ) => {
				this.updateBrowserstackSessions( sessions );
			} )
			.catch( ( error ) => {
				this.browserstackSessionsFailed( error );
			} );
	}

	browserstackSessionsFailed( error ) {
		return error;
	}

}

export default alt.createActions( BrowserstackSessionActions );
