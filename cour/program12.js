//consol.log(window.innerHeight); //DOM non disponible sur node
//fs => file system

const fs = require("fs");

fs.rename("file.txt","file.txt", (err) => {
    console.log("Rename complete");
    if(err){
        console.log("An error has occured");
        console.log(err);
    }
});

// r read, w => write (crée un nouveau fichier),
// w+ => append (ajouter au fichier existant)
// fs.open("file.txt"."r", (err,fd) => {
//    console.log (fd);
//    fs.close("file.txt"."r", (err,fd) => {
//    console.log (fd);
//    })
// })

// argument de la ligne de commande
console.log(process.argv);
console.log(process.argv[2]);

const content = fs.readFileSync("file.txt","utf8");
console.log(content);