const fs = require('fs');

var fetchNotes = () => {
    //try ini dipindahkan dari addNotes
    try {
        var notesString = fs.readFileSync('notes-data.json');
        // var notes = JSON.parse(noteString); ||Diganti return
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
}
var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}
var addNote = (title, body) => {
    // var notes = []; ||Arraynya diganti
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    // try {
    //     var notesString = fs.readFileSync('notes-data.json');
    //     var notes = JSON.parse(noteString); 
    // } catch (e) {
    //     return [];
    // } || Pindah ke FetchNotes

    var duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        //kembali ke note untuk menampilkan informasi kalo sudah ditaken
        return note; //tambahan
        // fs.writeFileSync('notes-data.json', JSON.stringify(notes));||dipindah ke savenotes
    };
};

var getAll = () => {
    console.log('getting all Notes');
};

var getNote = (title) => {
    console.log('Getting notes', title);
};

var removeNote = (title) => {
    console.log('Removing note', title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};