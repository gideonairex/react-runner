import alt from '../alt';
import TestCaseActions from '../actions/test-case-action';

class TestCaseStore {
	constructor() {
		this.bindListeners( {
			'handleUpdateTestCases' : TestCaseActions.UPDATE_TESTCASES,
			'handleFetchTestCases'  : TestCaseActions.FETCH_TESTCASES,
			'handleFailedTestCases' : TestCaseActions.TESTCASES_FAILED
		} );

		this.state = {
			'testCases' : [],
			'stdout' : []
		};
	}
	handleUpdateTestCases( data ) {
		this.state.testCases = data;
		this.error = null;
	}

	handleFetchTestCases() {
		this.state.testCases = [];
	}

	handleFailedTestCases( error ) {
		this.error = error;
	}

}

export default alt.createStore( TestCaseStore, 'TestCaseStore' )
