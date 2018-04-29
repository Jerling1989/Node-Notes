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
	// CREATE NOTE OBJECT
	var note = notes.addNote(argv.title, argv.body);
	// IF NOTE OBJECT CANNOT BE CREATED (TITLE TAKEN)
	if (note == undefined) {
		console.log('Note title already in use');
		// ELSE LOG NEW NOTE INFO
	} else {
		console.log('New Note Added!');
		console.log('--');
		console.log(`Title: ${note.title}`);
		console.log(`Body: ${note.body}`);
	}

} else if (command === 'list') {
	notes.getAll();
} else if (command === 'read') {
	notes.getNote(argv.title);

} else if (command === 'remove') {
	var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? 'Note was removed' : 'Note not found';
	console.log(message);

} else {
	console.log('Command not recognized');
}
