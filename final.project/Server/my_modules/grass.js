const io = require('socket.io-client');

// Create a socket connection
const socket = io('http://localhost:3000'); 


var LivingCreature = require("./ancestor")
module.exports = class Grass extends LivingCreature {
  constructor(x, y, index) {
    super(x, y, index);
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
    this.newCellCount = 0
     // Store the callback function
  }    
  mul() {
    
    this.multiply++;
    //console.log(this.chooseCell(0));
    let newCells = this.chooseCell(0)
    let newCell =newCells[Math.floor(Math.random()*newCells.length)]
    //console.log(newCell);
    if (this.multiply >= 8 && newCell) {
      var newGrass = new Grass(newCell[0], newCell[1], this.index);

      grassArr.push(newGrass);

      matrix[newCell[1]][newCell[0]] = this.index;

      this.multiply = 0;
      this.newCellCount++
      //socket.emit('newCellCount', this.newCellCount);
      // Invoke the callback function with the newCellCount value
      
    }
  }
}
