//============ 1 ===============
// var square = (x) => {
//     var res = x * x;
//     return res;
// }

//============ 2 ===============
// var square = x => x * x;
//============ Jawab ============
// console.log(square(8));


//============ 3 ===============

var user = {
    name: 'Faza',
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi ${this.name} !`);
    },
    //Jadi fungsi ini yang bisa membaca name pada scope User
    sayHello() {
        console.log(arguments);
        console.log(`Hi ${this.name} Ganteng!`)
    }
}

user.sayHi();
// user.sayHello(1, 2, 3);

//Hasil Output
//=============================
// { '0': {},
//   '1':
//    { [Function: require]
//      resolve: [Function: resolve],
//      main:
//       Module {
//         id: '.',
//         exports: {},
//         parent: null,
//         filename: '/Users/fazafahamsyah/Desktop/notes-node/playground/arrow-functions.js',
//         loaded: false,
//         children: [],
//         paths: [Object] },
//      extensions: { '.js': [Function], '.json': [Function], '.node': [Function] }
//      cache: { '/Users/fazafahamsyah/Desktop/notes-node/playground/arrow-functions.js': [Object] } },
//   '2':
//    Module {
//      id: '.',
//      exports: {},
//      parent: null,
//      filename: '/Users/fazafahamsyah/Desktop/notes-node/playground/arrow-functions.js',
//      loaded: false,
//      children: [],
//      paths:
//       [ '/Users/fazafahamsyah/Desktop/notes-node/playground/node_modules',
//         '/Users/fazafahamsyah/Desktop/notes-node/node_modules',
//         '/Users/fazafahamsyah/Desktop/node_modules',
//         '/Users/fazafahamsyah/node_modules',
//         '/Users/node_modules',
//         '/node_modules' ] },
//   '3': '/Users/fazafahamsyah/Desktop/notes-node/playground/arrow-functions.js',
//   '4': '/Users/fazafahamsyah/Desktop/notes-node/playground' }
// Hi undefined !