'use strict';

import alt from '../alt';
import TestCaseSource from '../sources/test-case-source';

class TestCaseActions {

	updateTestcases( testCases ) {
		return testCases;
	}

	fetchTestcases( options ) {
		return TestCaseSource.fetch( options )
			.then( ( testCases ) => {
				this.updateTestcases( testCases );
			} )
			.catch( ( error ) => {
				this.testcasesFailed( error );
			} );
	}

	testcasesFailed( error ) {
		return error;
	}

}

export default alt.createActions( TestCaseActions )
