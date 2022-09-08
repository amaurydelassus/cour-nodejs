/*
Créer un fichier node qui créé 50 entiers aléroires entre 0 et 20.
Enregistrer ces entiers dans un fichier avec ce format
eniter1 entier2
entier3 entier4
...
*/
const fs = require('fs');

function getRandom(min, max) {
    const r = Math.random(); //changement d'echelle 0 -> min et 1 max
    const newRandom = min + r * (max - min);
    return Math.floor(newRandom);
  }

let x;
let tabs = [];
for($i = 0 ; $i < 50 ; $i++){
    x = getRandom(0, 20);
    if($i % 2 == 0)
    {
        tabs += `"|${x}|`;
    }   
    else
    {
        tabs += `${x}|"\n`;
    }
}

console.log(tabs);
console.log(process.argv[2]);
fd =  tabs.toString() ;
fs.writeFile(process.argv[2] , fd ,function (err) {
    if (err)
    {
        return console.log(err);
    }
    console.log('writeFile corect');
});

