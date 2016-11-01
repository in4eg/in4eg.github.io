function Pet (name, type) {

  this.name = name || "noname";
  this.type = type || "unknown";
  this.water = 0;
  this.food = 0;
  this.life = 100;

  this.happines = function(water, food) {

    water = Math.abs(water);
    food = Math.abs(food);

    this.life = this.life - (water + food);

    if (food < 50) {
      console.log("I need more food");
    } else if (food >= 50){
      console.log("I am happy");
    } else if (food == 0) {
      console.log("Your pet die");
    }

    if (this.life < 50) {
      console.log("I wont to eat");
    } else if (this.life >= 50){
      console.log("I am happy");
    } else if (this.life == 0) {
      console.log("Your pet die");
    }

  }

};

var Pet1 = new Pet ("funny", "rabbit");

console.log(Pet1);


Pet1.happines(50, 50);




