var push = require( 'pushover-notifications' );

var p = new push( {
    token: "aZVzuxpryiY6JEse9PgtoL8x5xwyeh",
	user: "4lvOb4AY2HP8LVFD5t4Iy038Tz0rEM"
    // update_sounds: true // update the list of sounds every day - will
    // prevent app from exiting.
});

var msg = {
    message: 'omg node test',
    title: "Well - this is fantastic",
    sound: 'magic', // optional
    priority: 1 // optional
};

p.send( msg, function( err, result ) {
    if ( err ) {
        throw err;
    }

    console.log( result );
});