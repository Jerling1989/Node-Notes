console.log('Starting app.js');

// REQUIRE NPM PACKAGES
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
// REQUIRE FILES
const notes = require('./notes.js');

// CREATE APP VARIABLES
const argv = yargs.argv;
var command = argv._[0];

// LOG USER COMMAND
console.log('Command:', command);
// LOG YARGS PARSED INPUT
console.log('Yargs:', argv);

// IF USER COMMANDS TO ADD NOTE
if (command === 'add') {
	// STORE FUNCTION RETURN VALUE IN VARIABLE
	var note = notes.addNote(argv.title, argv.body);
	// IF NOTE OBJECT CANNOT BE CREATED (TITLE TAKEN)
	if (note == undefined) {
		console.log('Note title already in use');
		// ELSE LOG NEW NOTE INFO
	} else {
		console.log('New Note Added!');
		notes.logNote(note);
	}

// IF USER COMMANDS TO LIST NOTES
} else if (command === 'list') {
	notes.getAll();

// IF USER COMMANDS TO READ NOTE
} else if (command === 'read') {
	// STORE FUNCTION RETURN VALUE IN VARIABLE
	var note = notes.getNote(argv.title);
	// IF NOTE IS NOT FOUND
	if (note == undefined) {
		console.log('Note not found');
		// ELSE LOG FOUND NOTE INFO
	} else {
		console.log('Note found!');
		notes.logNote(note);
	}

// IF USER COMMANDS TO REMOVE NOTE
} else if (command === 'remove') {
	// STORE FUNCTION RETURN IN VARIABLE (TRUE OR FALSE)
	var noteRemoved = notes.removeNote(argv.title);
	// TURNARY OPERATOR FOR CONSOLE LOG
	var message = noteRemoved ? 'Note was removed' : 'Note not found';
	// LOG MESSAGE
	console.log(message);

// IF USER ENTERS AN INVALID COMMAND
} else {
	console.log('Command not recognized');
}
