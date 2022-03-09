class monster {
    constructor(name, atk, hp){
        this.name = name;
        this.atk = atk;
        this.hp = hp;
    }
  
  attack(monster){
      monster.hp = monster.hp - this.atk;
      console.log(`monstre${this.name} a attaqué ${monster.name}.`)
  }  
}

const monster1 = new monster("monster1", 10, 100);
const monster2 = new monster("monster2", 10, 100);
const btnElement = document.getElementById("btn");
console.log(btnElement);
console.log(monster1, monster2);
monster1.attack(monster2);
console.log(monster1, monster2);