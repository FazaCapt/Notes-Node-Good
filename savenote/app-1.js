//Penjelasan dan keterangan ada dibawah
console.log('starting app.js!');
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes-1');
// console.log(process.argv);
// var command = process.argv[2];


var argv = yargs.argv;
var command = argv._[0];
// console.log('Process: ', process.argv);
console.log('Yargs: ', argv);
console.log('Command: ', command);


if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('Command not recognized')
}



// print process.argv
// process.argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
// });
//diterminal: node app-1.js one two=three four
// 0: /usr/local/bin/node
// 1: /Users/fazafahamsyah/Desktop/notes-node/app-1.js
// 2: one
// 3: two=three
// 4: four
//====================================================
//Pengertian
//process.argv: 
// menampilkan: 
// [ '/usr/local/bin/node',
//   '/Users/fazafahamsyah/Desktop/notes-node/app-1.js' ]Z
//Properti process.argv mengembalikan sebuah array yang berisi argumen baris perintah yang dilewati saat proses Node.js diluncurkan. Elemen pertama adalah process.execPath. Lihat process.argv0 jika akses ke nilai asli argv [0] diperlukan. Elemen kedua adalah path ke file JavaScript yang dieksekusi. Elemen yang tersisa akan menjadi argumen perintah baris tambahan.

// console.log('Process: ', process.argv);
// console.log('Yargs: ', argv);
//bila diinputkan: node app-1.js add encrypted
//maka: 
// Command:  add
// Process:  [ '/usr/local/bin/node',
//   '/Users/fazafahamsyah/Desktop/notes-node/app-1.js',
//   'add',
//   'encrypted' ]
// Yargs:  { _: [ 'add', 'encrypted' ], '$0': 'app-1.js' }
// Adding new notes