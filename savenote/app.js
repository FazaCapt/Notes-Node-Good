//Using require.
//Menjelaskan cara menggunakan require pada nodeJS
console.log('starting app.js!');
//=======================================================
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes');
//_isString: (Memeriksa apakah nilai diklasifikasikan sebagai String primitif atau objek.)
//Return:
//(Boolean): Mengembalikan nilai true jika nilainya adalah string, else false.
// console.log(_.isString(true));
// console.log(_.isString('Faza'));
//_.uniq : Membuat versi duplikat bebas dari sebuah array, menggunakan SameValueZero untuk perbandingan kesetaraan, di mana hanya kemunculan pertama setiap elemen yang disimpan. Urutan nilai hasil ditentukan oleh urutan yang terjadi dalam array.
//return: tidak ada object array yang sama 
var filteredArray = _.uniq(['Faza', 1, 'Ganteng', 2, 'Tampan', 1, 2, 3, 4, 5]);
console.log(filteredArray);

//=======================================================
//Mengetahui info user di pc dan info object meliputi uid, gid, username, homedir
// var user = os.userInfo();
// console.log(user);
// var res = notes.addNote();
// console.log(res);
// var tambah = notes.add(3, 5);
// console.log(tambah);
// console.log('Results: ', notes.add(9, -2));
//=======================================================
//Menambahkan / membuat file greetings | Pesannya
// fs.appendFile('Greeting.txt', 'Hello ' + user.username + '!');
// fs.appendFile('Greeting.txt', ` Hello ${user.username}!, You are ${notes.age} old`);