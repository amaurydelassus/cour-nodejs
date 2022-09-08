// orienté objet : paradigme qui permet de definir des classe et de manipuler des objcts.
// propriétés, méthodes héritage, suchage de méthodes

//objet litéral 
const fighter = {
    name : "ken",
    hp : 1000,
    attaque : ["hadouken", "tatsumaki"],
    isSecret : false,
    isAlive : function (){
        return this.hp > 0 ;
    },
};

// fonction constructeur
function StreetFighter(hp,name){
    this.hp = hp;
    this.name = name ;
    this.performAttack = function (){
        console.log(this.name, "hadouuuken");
    };
}

const ryu = new StreetFighter(1000, "ryu");
const ken = new StreetFighter(900,"ken");

ryu.performAttack();
ken.performAttack();

console.log(ryu);// afficher le contenue de l'objet 
console.log(ryu.isAlive());