import alt from '../alt';
import BrowserstackActions from '../actions/browserstack-session-action';

class BrowserstackStore {

	constructor() {
		this.bindListeners( {
			'handleUpdateBrowserstacks' : BrowserstackActions.UPDATE_BROWSERSTACK_SESSIONS,
			'handleFetchBrowserstacks'  : BrowserstackActions.FETCH_BROWSERSTACK_SESSIONS,
			'handleFailedBrowserstacks' : BrowserstackActions.BROWSERSTACK_SESSIONS_FAILED
		} );
		this.state = {
			'sessions' : []
		};
	}
	handleUpdateBrowserstacks( sessions ) {
		this.state.sessions = sessions;
		this.error = null;
	}
	handleFetchBrowserstacks() {
		this.state.sessions = [];
	}
	handleFailedBrowserstacks( error ) {
		this.error = error;
	}
}

export default alt.createStore( BrowserstackStore, 'BrowserstackStore' )
