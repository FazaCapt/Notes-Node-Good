//Requiring your own Files
//Jadi tinggal dicreate di file app.js
console.log('Starting notes.js!');
console.log('====================')

// console.log(module);
// module.exports.age = 25;

//Sudah menggunakan ES6!
module.exports.addNote = () => {
    console.log('Add Notes!')
    return 'new notes'
}
module.exports.add = (a, b) => {
    return a + b;
}

//Sebelum menggunak ES6!
// module.exports.add = function() {};

//=======================================================
// Data Module: 
// Module {
//   id: '/Users/fazafahamsyah/Desktop/notes-node/notes.js',
//   exports: {},
//   parent:
//    Module {
//      id: '.',
//      exports: {},
//      parent: null,
//      filename: '/Users/fazafahamsyah/Desktop/notes-node/app.js',
//      loaded: false,
//      children: [ [Circular] ],
//      paths:
//       [ '/Users/fazafahamsyah/Desktop/notes-node/node_modules',
//         '/Users/fazafahamsyah/Desktop/node_modules',
//         '/Users/fazafahamsyah/node_modules',
//         '/Users/node_modules',
//         '/node_modules' ] },
//   filename: '/Users/fazafahamsyah/Desktop/notes-node/notes.js',
//   loaded: false,
//   children: [],
//   paths:
//    [ '/Users/fazafahamsyah/Desktop/notes-node/node_modules',
//      '/Users/fazafahamsyah/Desktop/node_modules',
//      '/Users/fazafahamsyah/node_modules',
//      '/Users/node_modules',
//      '/node_modules' ] }