var LivingCreature = require("./ancestor")
module.exports = class Wild extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;
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
            [this.x + 1, this.y + 1]
        ];
        // return this.directions
        // var gncDirectionsWld = []
        // for (let i = 0; i < this.directions.length; i++) {
        //     gncDirectionsWld.push(this.directions[i])
            
        // }
        // this.directions = gncDirectionsWld
        
    }

    chooseCell(character,character2) {
        this.getNewCoordinates()
        return super.chooseCell(character,character2);
    }
    mul() {
        let newCells = this.chooseCell(0)
        let newCell =newCells[Math.floor(Math.random()*newCells.length)]
        //console.log(newCell);
        if (newCell) {
            var newWild = new Wild(newCell[0], newCell[1], this.index);
            wildArr.push(newWild);
            matrix[newCell[1]][newCell[0]] = 3;
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
            matrix[newY][newX] = 3
            this.x = newX
            this.y = newY
        }
        if (this.energy <= 0) {
            this.die()
        }
    }

    eat() {

        let foods = this.chooseCell(1,2)
        let food = foods[Math.floor(Math.random()*foods.length)]
        if (food) {
            this.energy++
            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[food[1]][food[0]] = 3
            this.x = newX
            this.y = newY
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
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
        for (var i in wildArr) {
            if (this.x == wildArr[i].x && this.y == wildArr[i].y) {
                wildArr.splice(i, 1);
                break;
            }
        }
    }
}





































/*class Wild {
    constructor(x, y, index) {
        this.x = x,
            this.y = y,
            this.index = index,
            this.energy = 8,
            this.directions = [
                [this.x - 1, this.y - 1],
                [this.x, this.y - 1],
                [this.x + 1, this.y - 1],
                [this.x - 1, this.y],
                [this.x + 1, this.y],
                [this.x - 1, this.y + 1],
                [this.x, this.y + 1],
                [this.x + 1, this.y + 1]
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
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;

    }
    mul() {
        var newCell = random(this.chooseCell(0));
        if (newCell) {
            var newWild = new Wild(newCell[0], newCell[1], this.index);
            wildArr.push(newWild);
            matrix[newCell[1]][newCell[0]] = 2;
            this.energy = 8
        }
    }
    move() {

        this.energy--

        console.log(this.energy);
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)
        if (newCell) {

            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 2
            this.x = newX
            this.y = newY
        }
        if (this.energy <= 0) {
            this.die()
        }
    }

    eat() {

        let plants = this.chooseCell(1)
        let plant = random(plants)
        let vegetarians = this.chooseCell(2)
        let vegetarian = random(vegetarians)
        if (plant) {
            this.energy++
            matrix[this.y][this.x] = 0
            let newX = plant[0]
            let newY = plant[1]
            matrix[plant[1]][plant[0]] = 3
            this.x = newX
            this.y = newY
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 14) {
                this.mul()
            }
        }
        else if (vegetarian) {
            this.energy++
            matrix[this.y][this.x] = 0
            let newX = vegetarian[0]
            let newY = vegetarian[1]
            matrix[vegetarian[1]][vegetarian[0]] = 3
            this.x = newX
            this.y = newY
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 2);
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
        for (var i in wildArr) {
            if (this.x == wildArr[i].x && this.y == wildArr[i].y) {
                wildArr.splice(i, 1);
                break;
            }
        }
    }
}



*/