//modules
//what is modules ? 
//modules is ecapsulated code (only share minimum)
//commonJS, every file is module (by default)
const names = require('./module2');

// const {john, doko} = require ('./module2');


const sayHi = require('./module1')

// console.log(names);
// sayHi(john);
sayHi(names.john);



//modules
