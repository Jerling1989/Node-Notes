// REQUIRE NPM PACKAGES
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
// REQUIRE FILES
const notes = require('./notes.js');

// NOTE TITLE OBJECT (FOR COMMAND)
const title = {
	describe: 'Title of note',
	demand: true,
	alias: 't'
};
// NOTE BODY OBJECT (FOR COMMAND)
const body = {
	describe: 'Body of note',
	demand: true,
	alias: 'b'
};

// CREATE ARGUMENT/COMMAND VARIABLES
const argv = yargs
	.command('add', 'Add a new note', {
		title,
		body
	})
	.command('list', 'List all notes')
	.command('read', 'Read a note', {
		title
	})
	.command('remove', 'Delete a note', {
		title
	})
	.help()
	.argv;
var command = argv._[0];


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

// IF USER COMMANDS TO LIST ALL  NOTES
} else if (command === 'list') {
	// GET ALL THE NOTES
	var allNotes = notes.getAll();
	// LOG THE AMOUNT OF NOTES FOUND
	console.log(`Printing ${allNotes.length} note(s)`);
	// LOOP THROUGH NOTES ARRAY AND LOG EACH NOTE
	allNotes.forEach((note) => notes.logNote(note));

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
