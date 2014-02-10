//Based on pushover-button-devices.js, attempting change user key to pushover group


  var five = require( "johnny-five" ),
//var five = require("../lib/johnny-five.js"),
  board, button;

board = new five.Board();

board.on("ready", function() {

  // Create a new `button` hardware instance.
  // This example allows the button module to
  // create a completely default instance
  button1 = new five.Button(8);
  button2 = new five.Button(7);

  // Inject the `button` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    button1: button1
  });
//	board.repl.inject({
//    button2: button2
//  });
  
  // This is node-pushover script
  
var push = require( 'pushover-notifications' );

var p = new push( {
    token: "aZVzuxpryiY6JEse9PgtoL8x5xwyeh", 
	user: "gzCqxM6YAf513RoKiSK4FHMTynR7on",  // group key
	// update_sounds: true // update the list of sounds every day - will
    // prevent app from exiting.
});

//message for button1
var msg1 = {
	device: "Nick-iPhone-5S",
    //device: "iPad-2"
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

  // Button1 Event API

  // "down" the button is pressed
  button1.on("down", function() {
  	//Pushover message sent
    p.send( msg1, function( err, result ) {
    if ( err ) {
        throw err;
    }

    console.log( result );
	});
});

  // "hold" the button is pressed for specified time.
  //        defaults to 500ms (1/2 second)
  //        set
  button1.on("hold", function() {
    console.log("hold1");
  });

  // "up" the button is released
  button1.on("up", function() {
    console.log("up1");
  });


 // Button2 Event API

  // "down" the button is pressed
  button2.on("down", function() {
  	//Pushover message sent
    p.send( msg2, function( err, result ) {
    if ( err ) {
        throw err;
    }

    console.log( result );
	});
});

  // "hold" the button is pressed for specified time.
  //        defaults to 500ms (1/2 second)
  //        set
  button2.on("hold", function() {
    console.log("hold2");
  });

  // "up" the button is released
  button2.on("up", function() {
    console.log("up2");
  });
 }); 