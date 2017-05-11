//Menunjukan kalo hurufnya tidak boleh lebih dari 6
// var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

// var longWords = words.filter(function(word) {
//     return word.length > 6;
// })
// console.log(longWords);
// Filtered array longWords is ["exuberant", "destruction", "present"]

//========================================================
//Menampilkan nilai yang lebih dari 10
function isBigEnough(value) {
    return value >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]

console.log(filtered);

//========================================================
//Invalid entris JSON

var arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: 'undefined' }
];

var invalidEntries = 0;
//(1)
function isNumber(obj) {
    return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
}

function filterByID(item) {
    //ini fungsi (1)
    if (isNumber(item.id)) {
        return true;
    }
    invalidEntries++;
    return false;
}

var arrByID = arr.filter(filterByID);

console.log('Filtered Array\n', arrByID);
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries = ', invalidEntries);
// Number of Invalid Entries = 4