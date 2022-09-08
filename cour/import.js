// Dans un noveau fichier JS: importer les classes BoiteRangement, Tournevis et Enclume. 
// Puis, créer une BoiteRangement avec deux tournievis et une enclume
const {BoiteRangement, Tournevis, Enclume} = require("./bricolage.js");

const boiteRangement = new BoiteRangement();
const tournievis1 = new Tournevis(50,"Visser");
const tournievis2 = new Tournevis(30,"dévisser");
const enclume1 = new Enclume(500,"Reparer");
const enclume2 = new Enclume(1000,"Assommer");

boiteRangement.outil.push(tournievis1);
boiteRangement.outil.push(tournievis2);
boiteRangement.outil.push(enclume1);
boiteRangement.outil.push(enclume2);

console.log(boiteRangement.outil);