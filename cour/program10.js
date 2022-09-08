//on peut importe les module utils
// modules avec require et module.exportes => technique ou syntaxe common JS

const sayPika = require("./pika");
const Pokemon = require("./Pokemon");
const PI = require("./PI");
const utils = require("./utils");

sayPika();
const p = new Pokemon();
console.log(p, plevel);
console.log(PI);
console.log(utils.sum(2,4));
console.log(utils.PI);

