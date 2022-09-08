// exo:Les classes suivantes en utilisant les classes ES6
// Outil: avec le propriétés "poids" et "usage" initialisées dans le constructeur et la méthode utiliser()
// Enclume: hérite de Outil et définit la méthode "tomberDuCiel()"
// Tournevis: hérite de Outil et définir la propriété diamètre
// BoiteRangement: contient une propriété "outils" initialisée à une tableau vide
// En utilisant commonJS, exporter les classes: BoiteRangement, Tournevis et Enclume

class Outil {
    constructor(poids,usage){
        this.poids = poids;
        this.usage = usage;
    }
    utiliser(){}
}

class Enclume extends Outil {
    constructor(poids,usage){
        super(poids,usage);
    }
    tomberDuCiel(){}
}
class Tournevis extends Outil {
    constructor(poids,usage){
        super(poids,usage);
    }
    diamètre(){}
}

class BoiteRangement {
    constructor(){
        this.outil = [];
    }
    
}

module.exports = {BoiteRangement:BoiteRangement,Tournevis:Tournevis,Enclume : Enclume};


