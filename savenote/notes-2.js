const fs = require('fs');

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };

    //untuk mencoba sekali, apakah ada filenya atau tidak
    try {
        //Untuk menambahkan, supaya tidak menghapus data yang lama, Harus dilihat urutannya
        var noteString = fs.readFileSync('notes-data.json');
        var notes = JSON.parse(noteString);
    } catch (e) {

    }
    //supaya tidak ada yang sama titlenya
    //Metode filter() 
    //menciptakan array baru dengan semua elemen yang lulus uji yang dilaksanakan oleh fungsi yang disediakan.
    var duplicateNotes = notes.filter((note) => note.title === title)
        //Memasukan data dan membuat file
    if (duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
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