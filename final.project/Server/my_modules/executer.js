var LivingCreature = require("./ancestor")
module.exports = class Executer extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;
        this.directions = [
          [this.x, this.y - 1],
          [this.x - 1, this.y],
          [this.x + 1, this.y],
          [this.x, this.y + 1],
        ];
      }
    getNewCoordinates() {
        this.directions = [
            [this.x, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x, this.y + 1],
        ];
        // return this.directions
        // var gncDirectionsExc = []
        // for (let i = 0; i < this.directions.length; i++) {
        //     gncDirectionsExc.push(this.directions[i])
            
        // }
    //    this.directions
    }

    chooseCell(character,character2) {
        this.getNewCoordinates()
        return super.chooseCell(character,character2);
    }
    mul() {
        let newCells = this.chooseCell(0)
        let newCell =newCells[Math.floor(Math.random()*newCells.length)]
        if (newCell) {
            var newExecuter = new Executer(newCell[0], newCell[1], this.index);
            executerArr.push(newExecuter);
            matrix[newCell[1]][newCell[0]] = 5;
            this.energy = 8
        }
    }
    move() {

        this.energy--

        //console.log(this.energy);
        let newCells = this.chooseCell(0)
        let newCell =newCells[Math.floor(Math.random()*newCells.length)]
        if (newCell) {

            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 5
            this.x = newX
            this.y = newY
        }
        if (this.energy <= 0) {
            this.die()
        }
    }

    execute() {

        let foods = this.chooseCell(1,4)
        let food = foods[Math.floor(Math.random()*foods.length)]
        if (food) {
            this.energy++
            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[food[1]][food[0]] = 5
            this.x = newX
            this.y = newY
            for (var i in zombieArr) {
                if (newX == zombieArr[i].x && newY == zombieArr[i].y) {
                    zombieArr.splice(i, 1);
                    break;
                }
            }
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 12) {
                this.mul()
            }
        }
        else {
            this.move()
        }
    }
    die() {
        console.log("merav");

        matrix[this.y][this.x] = 0
        for (var i in executerArr) {
            if (this.x == executerArr[i].x && this.y == executerArr[i].y) {
                executerArr.splice(i, 1);
                break;
            }
        }
    }
}


