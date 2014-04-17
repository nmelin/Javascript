// Pushover setup, set App token, and User key (or Group key)
var push = require( 'pushover-notifications' );
var p = new push( {
	token: "aZVzuxpryiY6JEse9PgtoL8x5xwyeh", 
	user: "4lvOb4AY2HP8LVFD5t4Iy038Tz0rEM",  
});

//johnny-five arduino node.js setup
var five = require( 'johnny-five' );
var board = new five.Board();

//johnny-five board function
board.on("ready", function() {

	/*Create a new  hardware instances (buttons, led's, servo's, etc).
	This example allows the button module to 
	create a completely default instance */

	var	 
		button1 = new five.Button(7),
		button2 = new five.Button(8),
		led1 		= new 	five.Led(13);
  
	// Inject defined hardware into the REPL instance
	this.repl.inject(
	 	{
	 		button1 : button1,
	 		button2 : button2,
	 		led1 		: led1,
	 	}
	);

	//pushover messages map prototype 
	//set message, and optional device, title, priority, sound

	function Push_map( message ) {
		this.message 	= message;
	}
	Push_map.prototype.sound = 'magic';
	Push_map.prototype.priority = 1;
	Push_map.prototype.device = "Nick-iPhone-5S";
	Push_map.prototype.title = "Node-js";

//-------- START BUTTON EVENTS -------- 
	// "down" : the button is pressed
	// "up" 	: the button is not pressed
	// "hold" : the button is held down

	// Begin button1 event
	button1.on("down", function() {
		var pin = this.pin;
		var msg = new Push_map(
			"Button Pressed! (Pin " + pin + ")"
			);

		p.send( msg, function ( err, result ) {
			if ( err ) { throw err; }
			//console.log( "Button Pressed (Pin " + pin + ") " + result );
		});
	});
	// End button1 event

	// Begin button2 event
	button2.on("down", function() {
		var pin = this.pin;
		var msg = new Push_map(
			"Button Pressed! (Pin " + pin + ")"
			);

		p.send( msg, function ( err, result ) {
			if ( err ) { throw err; }
			//console.log( "Button Pressed (Pin " + pin + ") " + result );
		});
	});
	// End button1 event
//-------- END BUTTON EVENTS -------- 

}); 