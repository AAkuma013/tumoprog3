var LivingCreature = require("./ancestor")
module.exports = class GrassEater extends LivingCreature {
  constructor(x, y, index) {
    super(x, y, index);
    this.energy = 10;
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1],
    ];
  }

  getNewCoordinates() {
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1],
    ];
    // return this.directions
    // var gncDirectionsEtt = []
    // for (let i = 0; i < this.directions.length; i++) {
    //     gncDirectionsEtt.push(this.directions[i])
            
    // }
    // this.directions = gncDirectionsEtt
        
  }

  chooseCell(character) {
    this.getNewCoordinates();

    return super.chooseCell(character);
  }

  mul() {
    let newCells = this.chooseCell(0)
    let newCell =newCells[Math.floor(Math.random()*newCells.length)]
    //console.log(newCell);
    if (newCell) {

      var newGrassEater = new GrassEater(newCell[0], newCell[1], this.index);
      grassEaterArr.push(newGrassEater);
      matrix[newCell[1]][newCell[0]] = 2;
      this.energy = 10;
    }
  }
  move() {
    this.energy--;

    //console.log(this.energy);
    let newCells = this.chooseCell(0)
    let newCell =newCells[Math.floor(Math.random()*newCells.length)]
    if (newCell) {
      let newX = newCell[0];
      let newY = newCell[1];
      matrix[this.y][this.x] = 0;
      matrix[newY][newX] = 2;
      this.x = newX;
      this.y = newY;
    }
    if (this.energy <= 0) {
      this.die();
    }
  }

  eat() {
    let foods = this.chooseCell(1);
    let food =foods[Math.floor(Math.random()*foods.length)];
    if (food) {
      this.energy++;
      matrix[this.y][this.x] = 0;
      let newX = food[0];
      let newY = food[1];
      matrix[food[1]][food[0]] = 2;
      this.x = newX;
      this.y = newY;
      for (var i in grassArr) {
        if (newX == grassArr[i].x && newY == grassArr[i].y) {
          grassArr.splice(i, 1);
          break;
        }
      }
      if (this.energy >= 12) {
        this.mul();
      }
    } else {
      this.move();
    }
  }
  die() {
    console.log("merav");

    matrix[this.y][this.x] = 0;
    for (var i in grassEaterArr) {
      if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
        grassEaterArr.splice(i, 1);
        break;
      }
    }
  }
}
