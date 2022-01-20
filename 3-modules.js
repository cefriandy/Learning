//global variable in nodes
//node in node there is no window. because no browser.

//__dirname = path to current directory
// __filename = file name
// require = function to use modules (commonJS)
// process = info about env where the program is being executed

const {john, peter} = require ('./names');
const sayHi = require ('./utils');

require ('./7-mind-grenade');

// console.log(sayHi);

//example
// console.log(__dirname);
// // console.log(__filename);

// setInterval( () => {
//     console.log('hello world');
// }, 1000);

// sayHi(john);
