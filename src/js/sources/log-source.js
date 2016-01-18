import request from 'superagent';
import config from '../config';

export default {

	fetch : function ( options ) {
		let id = options;
		return new Promise( function ( resolve, reject ) {
			// Chage to get test cases
			request
				.get( `${config.api}/logs/${id}` )
				.set( 'Accept', 'application/json' )
				.end( function ( err, data ) {
					if( err ) {
						return reject( err );
					}
					resolve( data.text );
				} );
		} );
	}

};
