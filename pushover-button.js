  var five = require( "johnny-five" ),
//var five = require("../lib/johnny-five.js"),
  board, button;

board = new five.Board();

board.on("ready", function() {

  // Create a new `button` hardware instance.
  // This example allows the button module to
  // create a completely default instance
  button = new five.Button(8);

  // Inject the `button` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    button: button
  });

  // This is node-pushover script
  
var push = require( 'pushover-notifications' );

var p = new push( {
    token: "aZVzuxpryiY6JEse9PgtoL8x5xwyeh", 
	user: "4lvOb4AY2HP8LVFD5t4Iy038Tz0rEM"  // nick.melin@gmail.com pushover account
    // update_sounds: true // update the list of sounds every day - will
    // prevent app from exiting.
});

var msg = {
    message: 'omg node test',
    title: "Well - this is fantastic",
    sound: 'magic', // optional
    priority: 1 // optional
};



  // Button Event API

  // "down" the button is pressed
  button.on("down", function() {
  	//Pushover message sent
    p.send( msg, function( err, result ) {
    if ( err ) {
        throw err;
    }

    console.log( result );
	});
});

  // "hold" the button is pressed for specified time.
  //        defaults to 500ms (1/2 second)
  //        set
  button.on("hold", function() {
    console.log("hold");
  });

  // "up" the button is released
  button.on("up", function() {
    console.log("up");
  });
});
