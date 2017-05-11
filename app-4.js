const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes-4');

const titleOptions = {
    describe: 'Title Of Note',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    describe: 'body Of Note',
    demand: true,
    alias: 'b'
};

var argv = yargs
    .command('add', 'Add New Note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all Notes')
    .command('read', 'Read a Note', {
        title: titleOptions
    })
    .command('remove', 'Remove was note', {
        title: titleOptions
    })
    .help()
    .argv;
var command = argv._[0];

// console.log('Command: ', command);
// console.log('Yargs: ', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created');
        notes.logNote(note);
    } else {
        console.log('note title taken');
    }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log('Note found');
        notes.logNote(note);
    } else {
        console.log('note not found');
    }
} else if (command === 'remove') {
    var removedNotes = notes.removeNote(argv.title);
    var message = removedNotes ? 'Note Was Removed' : 'note not found';
    console.log(message);
} else {
    console.log('Command not recognized');
};