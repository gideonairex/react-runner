import request from 'superagent';
import config from '../config';

export default {

	fetch : function () {
		return new Promise( function ( resolve, reject ) {
			request
				.get( `${config.api}/machines` )
				.set( 'Accept', 'application/json' )
				.end( function ( err, data ) {
					if( err ) {
						return reject( err );
					}
					resolve( data.body );
				} );
		} );
	},

	fetchMachine : function ( options ) {
		let machineId = options.machineId;
		return new Promise( function ( resolve, reject ) {
			request
				.get( `${config.api}/machines/${machineId}` )
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
