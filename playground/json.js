// var obj = {
//     name: 'Faza'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
// console.log(obj);

// var stringPerson = '{ "name": "Faza", "Age": 27 }';

// var person = JSON.parse(stringPerson);

// console.log(typeof stringPerson);
// console.log(stringPerson);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
    title: 'Some Title',
    body: 'Some Body'
};

//originalNoteString
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

//note
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);

//=================Keterangan=========================
// Metode JSON.stringify() :
// mengubah nilai JavaScript menjadi string JSON, mengganti secara opsional nilai jika fungsi pengganti ditentukan, atau opsional termasuk hanya properti yang ditentukan jika array pengganti.
// Metode JSON.parse() :
// mem-parsing string JSON, membangun nilai JavaScript atau objek yang dijelaskan oleh string. Fungsi reviver opsional dapat diberikan untuk melakukan transformasi pada objek yang dihasilkan sebelum dikembalikan.