class Executer {
    constructor(x, y, index) {
        this.x = x,
            this.y = y,
            this.index = index,
            this.energy = 8,
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
    }

    chooseCell(character,character2) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character || matrix[y][x] == character2) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;

    }
    mul() {
        var newCell = random(this.chooseCell(0));
        if (newCell) {
            var newExecuter = new Executer(newCell[0], newCell[1], this.index);
            executerArr.push(newExecuter);
            matrix[newCell[1]][newCell[0]] = 5;
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
        let food = random(foods)
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


