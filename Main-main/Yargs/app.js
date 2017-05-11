// var argv = require('yargs').argv;
const yargs = require('yargs');
var argv = yargs.argv;
//=============== 1 ==========================
// if (argv.ships > 3 && argv.distance < 53.5) {
//     console.log('Merampok lebih banyak riffiwobbles!');
// } else {
//     console.log('Mundur dari xupptumblers!');
// }
// terminal: node app.js --ships 4 --distance 22 || node app.js --ships 3 --distance 2
//=============== 2 ==========================
// console.log('(%d,%d)', argv.x, argv.y);
//Terminal: node app.js --x 4 --y 7
//=============== 3 ==========================
if (argv.s) {
    process.stdout.write(argv.fr ? 'Le perroquet dit: ' : 'The parrot says: ');
}
console.log(
    (argv.fr ? 'couac' : 'squawk') + (argv.p ? '!' : '')
);
//terminal: node app.js -s -fr (main2 sendiri lagi nanti)