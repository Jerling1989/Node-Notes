console.log('Starting notes.js');
const fs = require('fs');

// FETCH NOTES FUNCTION
var fetchNotes = () => {
	// RETURN NOTESTRING OBJECT IF IT ALREADY EXISTS
	try {
		var notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
		// IF NOTESTRING OBJECT DOES NOT EXIST RETURN EMPTY ARRAY
	} catch (e) {
		return [];
	}
};


// SAVE NOTES FUNCTION
var saveNotes = (notes) => {
	// SAVE NEW NOTES TO FILE
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


// ADD NOTE FUNCTION
var addNote = (title, body) => {
	// FETCH NOTES OBJECT
	var notes = fetchNotes();
	// CREATE NEW NOTE OBJECT
	var note = {
		title,
		body
	};
	// CHECK IF NOTE TITLE ALREADY EXISTS, IF SO ADD INTO DUPLICATENOTES ARRAY
	var duplicateNotes = notes.filter((note) => note.title === title);

	// IF NOTE TITLE DOES NOT ALREADY EXIST
	// PUSH NOTE INTO NOTES ARRAY, SAVE NOTES ARRAY, RETURN NOTE
	if (duplicateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);
		return note;
	}
};


var getAll = () => {
	console.log('Getting all notes');
};

var getNote = (title) => {
	console.log('Getting note:', title);
};


// REMOVE NOTE FUNCTION
var removeNote = (title) => {
	// FETCH NOTES OBJECT
	var notes = fetchNotes();
	// REMOVE ANY NOTE WITH TITLE ENTERED
	var newNotes = notes.filter((note) => note.title !== title);
	// SAVE NEW FILTERED NOTES
	saveNotes(newNotes);
	// CHECK IF ANY NOTES WERE REMOVED, RETURN VALUE
	return notes.length != newNotes.length
};

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
};