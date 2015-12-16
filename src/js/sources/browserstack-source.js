import request from 'superagent';
import config from '../config';

export default {

	fetch : function ( options ) {

		let machineId = options.machineId;
		let testCase  = options.testCaseId;

		return new Promise( function ( resolve, reject ) {
			request
				.get( `${config.api}/machines/${machineId}/test-cases/${testCase}` )
				.set( 'Accept', 'application/json' )
				.end( function ( err, data ) {
					if( err ) {
						return reject( err );
					}
					resolve( data.body );
				} );
		} );
	}

};
