
var LivingCreature = require("./ancestor");
const Executer = require("./executer")

module.exports = class Statue extends LivingCreature {
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
  Yin() {
    
    //this.multiply++;
    //console.log(this.chooseCell(0));
    let newCells = this.chooseCell(2)
    let newCell =newCells[Math.floor(Math.random()*newCells.length)]
    //console.log(newCell);
    if (newCell) {
        let newX = newCell[0]
        let newY = newCell[1]
        matrix[newY][newX] = 5
        let newExecuter = new Executer(newX,newY, 5 )
        executerArr.push(newExecuter);
        for (var i in grassEaterArr) {
            if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
                break;
            }
        }

        

      //this.multiply = 0;
      //this.newCellCount++
      //socket.emit('newCellCount', this.newCellCount);
      // Invoke the callback function with the newCellCount value
      
    }
  }
}
