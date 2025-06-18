// let n =5;

// const fruits = require("./antr_dir");

// for(i=0; i<n; i++){
//     console.log("hello ,", i);
// }

// console.log("Bye!");    


// learnig about Process
// let argv = process.argv;

// for(i = 2; i < argv.length; i++){
//     console.log("hello to ", argv[i]);
// }
 
// learning about module.exports / Exports in files


// const num = require("./math");
// console.log(num);
// console.log(num.sum(2,3));
// console.log(num.mul(2,4));
// console.log(num.PI);

// Exports in Directories

// 1) require -> index.js(Entry point like main() in another languages )


// const info = require("./antr_dir");

// console.log(info);

// npm refers to node package manager
// npm is the standard package manager in NodeJS
// npm is command line tool


//               require vs import

// To import something we have to use "export" variable first
// In any project either use require or import 
// Do not use both it shows irregualarity 
// To use import and exporrt we have to create a package.json file 
// In package.json file we have to write "type" : "module"
// In require we can't select particular thing from file
// import is new than require
// require is synchrounous
// import is ascynchronous

import { sum , PI } from "./math.js";
console.log(sum(2,4));