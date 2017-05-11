console.log('Starting notes.js!');
console.log('====================');

var addNote = (title, body) => {
    console.log('Adding note', title, body);
};

var getAll = () => {
    console.log('getting all Notes');
};

var getNote = (title) => {
    console.log('Getting notes', title);
};

var removeNote = (title) => {
    console.log('Removing note', title);¡
};

//ES6
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}

//belum ES6
// module.exports = {
//     addNote: addNote
// };