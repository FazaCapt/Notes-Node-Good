const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes-3');

var argv = yargs.argv;
var command = argv._[0];

console.log('Command: ', command);
console.log('Yargs: ', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    //Variable Note untuk memberikan pengumuman gitu 
    if (note) {
        console.log('Note created');
        console.log('--');
        console.log(`Title: ${note.title}`);
        console.log(`Title: ${note.body}`);
    } else {
        console.log('note title taken');
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('Command not recognized')
}