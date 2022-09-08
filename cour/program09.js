// class dispo depuis ES6 

class Human {
    constructor(hp){
        this.hp = hp;
    }

    isAlive(){
        return this.hp > 0;
    }
}

class StreetFighter extends Human {
    constructor(hp, name){
        super(hp);
        this.name = name;
    }

    performAttack(){
        console.log(this.name, ": hadoooken");
    }
}

// sucre syntaxique : facon de symplifier du code plus compliqué 

const ryu = new StreetFighter(1000, "ryu");
console.log(ryu);
ryu.performAttack();
