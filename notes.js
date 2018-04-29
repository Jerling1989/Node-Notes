// REQUIRE FS
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


// GET ALL NOTES FUNCTION
var getAll = () => {
	// RETURN NOTES OBJECT
	return fetchNotes();
};


// GET NOTE FUNCTION
var getNote = (title) => {
	// FETCH NOTES OBJECT
	var notes = fetchNotes();
	// CHECK IF NOTE WITH TITLE EXISTS, IF SO ADD INTO READNOTES ARRAY
	var readNotes  = notes.filter((note) => note.title === title);
	// RETURN THE NOTE THE USER WANTS TO READ
	return readNotes[0];
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


// LOG NOTE FUNCTION
var logNote = (note) => {
	debugger;
	// LOG INFO FROM NOTE OBJECT
	console.log('--');
	console.log(`Title: ${note.title}`);
	console.log(`Body: ${note.body}`);
};


// EXPORT FUNCTIONS
module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote,
	logNote
};