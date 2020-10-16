// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = 300;
        this.strength = 150;
    }

    attack() {
        return this.strength;

    }

    receiveDamage(damage) {
        this.health -= 50;
    }

    displayInfo() {
        console.log(`${this.name} has ${this.health}`);
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = 'Harald';
        this.health = 300;
        this.strength = 150;
    }
        
    receiveDamage(damage) {
       // damage = 50;
        this.health = this.health - damage;
        if (this.health > 0 ) {
           return `${this.name} has received ${damage} points of damage`;
        } 
        
         return `${this.name} has died in act of combat`;
        

    }

    battleCry() {
        return "Odin Owns You All!";
    }

}

//let fox = new Animal('Scott', 100);

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
        this.health = 60;
        this.strength = 25;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0 ) {
            return `A Saxon has received ${damage} points of damage`;
         } 
         
          return 'A Saxon has died in combat';
        
    }


}
// War
class War {}
