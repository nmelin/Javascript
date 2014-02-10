var push = require( 'pushover-notifications' );

var five = require( 'johnny-five' );

var board = new five.Board();

board.on("ready", function() {

	/*Create a new `button` hardware instance.
	This example allows the button module to 
	create a completely default instance */

	var	 button1 = new five.Button(8);
	  board.repl.inject({button1: button1});
  
	var	 button2 = new five.Button(7);
	  board.repl.inject({button2: button2});

	// Pushover setup, set App token, and User key (or Group key)
	var p = new push( {
		token: "aZVzuxpryiY6JEse9PgtoL8x5xwyeh", 
		user: "4lvOb4AY2HP8LVFD5t4Iy038Tz0rEM",  
	});

	//messages for buttons. set message, and optional device, title, priority, sound

	var msg1 = {
		device: "Nick-iPhone-5S",
		message: 'Button 1 Pressed!',
		title: 'Node-js',
		sound: 'magic', // optional
		priority: 1 // optional
	};

	//message for button2
	var msg2 = {
		device: "iPad-2",
		message: 'Button 2 Pressed!',
		title: 'Node-js',
		sound: 'magic', // optional
		priority: 1 // optional
	};

	/* Button Events. 
	"down" the button is pressed, 
	"up" the button is not pressed, 
	"hold" the butten is held*/

	button1.on("down", function() {
		p.send( msg1, function( err, result ) {
		if ( err ) {
			throw err;
		}

		console.log( result );
		});
	});


	button2.on("down", function() {
		p.send( msg2, function( err, result ) {
		if ( err ) {
			throw err;
		}

		console.log( result );
		});
	});

  
}); 