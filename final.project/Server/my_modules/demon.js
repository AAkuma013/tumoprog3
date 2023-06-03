var LivingCreature = require("./ancestor");
const Grass = require("./grass");
const Wild = require("./wild");
module.exports = class Demon extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 999999;
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
    // if (zombies.length == 4) {
    //     this.energy++
    //     let zombie1 = zombies[0]
    //     let zombie2 = zombies[1]
    //     let zombie3 = zombies[2]
    //     let zombie4 = zombies[3]
    //     let newX0 = zombie1[0]
    //     let newY0 = zombie1[1]
    //     let newX1 = zombie2[0]
    //     let newY1 = zombie2[1]
    //     let newX2 = zombie3[0]
    //     let newY2 = zombie4[1]
    //     let newX3 = zombie4[0]
    //     let newY3 = zombie3[1]
    //     matrix[zombie1[1],zombie1[0]] = 0
    //     matrix[zombie2[1],zombie[0]] = 0
    //     matrix[zombie3[1],zombie[0]] = 0
    //     matrix[zombie4[1],zombie4[0]] = 0
    //     for (var i in zombieArr) {
    //         if (newX0 == zombieArr[i].x && newY0 == zombieArr[i].y) {
    //             zombieArr.splice(i, 1);
    //             break;
    //         }
    //     for (var i in zombieArr) {
    //         if (newX1 == zombieArr[i].x && newY1 == zombieArr[i].y) {
    //             zombieArr.splice(i, 1);
    //             break;
    //         }
    //     for (var i in zombieArr) {
    //         if (newX2 == zombieArr[i].x && newY2 == zombieArr[i].y) {
    //             zombieArr.splice(i, 1);
    //             break;
    //         }
    //     for (var i in zombieArr) {
    //         if (newX3 == zombieArr[i].x && newY3 == zombieArr[i].y) {
    //             zombieArr.splice(i, 1);
    //             break;
    //         }
    //     }
            
            
        
    //     // matrix[this.y][this.x] = 0
    //     // let newX = zombie[0]
    //     // let newY = zombie[1]
    //     // matrix[zombie[1]][zombie[0]] = 3
    //     // this.x = newX
    //     // this.y = newY
    // }
    //     // for (var i in grassArr) {
    //     //     if (newX == grassArr[i].x && newY == grassArr[i].y) {
    //     //         grassArr.splice(i, 1);
    //     //         break;
    //     //     }
    //     // }
    //     if (this.energy >= 12) {
    //         this.mul()
        
    // }
    chooseKonCell(character, character2 = 100) {
        var KonGenKen = [
            [this.x, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x, this.y + 1],
        ];
        let found = [];
    
        for (var i in KonGenKen) {
          var x = KonGenKen[i][0];
    
          var y = KonGenKen[i][1];
    
          if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
            if (matrix[y][x] == character || matrix[y][x] == character2) {
              found.push(KonGenKen[i]);
            }
          }
        }
    
        return found;
      }

    chooseCell(character,character2) {
        this.getNewCoordinates()
        return super.chooseCell(character,character2);
    }

    // mul() {
    //     let newCells = this.chooseCell(0)
    //     let newCell =newCells[Math.floor(Math.random()*newCells.length)]
    //     //console.log(newCell);
    //     if (newCell) {
    //         var newWild = new Wild(newCell[0], newCell[1], this.index);
    //         wildArr.push(newWild);
    //         matrix[newCell[1]][newCell[0]] = 3;
    //         this.energy = 8
    //     }
    // }
    move() {

        

        //console.log(this.energy);
        let newCells = this.chooseCell(0)
        let newCell =newCells[Math.floor(Math.random()*newCells.length)]
        
        if (newCell) {

            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 6
            this.x = newX
            this.y = newY
            
            
        }
        // if (this.energy <= 0) {
        //     this.die()
        // }
    }

    genKen() {

        let zombies = this.chooseKonCell(4)
        let executers = this.chooseKonCell(5)
        let grasses = this.chooseCell(0)
        let grass = grasses[Math.floor(Math.random()*grasses.length)];

        
        //let zombie = zombies[Math.floor(Math.random()*zombies.length)]
        if (zombies.length == 4) {
            this.energy++
            for (let j = 0; j < zombies.length; j++) {
                let zombie = zombies[j]
                let newX = zombie[0]
                let newY = zombie[1]
                matrix[zombie[1]][zombie[0]] = 0
                
                for (var i in zombieArr) {
                    if (newX == zombieArr[i].x && newY ==zombieArr[i].y) {
                        zombieArr.splice(i, 1);
                        break;
                    }
                }
            }
            // matrix[this.y][this.x] = 0
            // let newX = zombie[0]
            // let newY = zombie[1]
            // matrix[zombie[1]][zombie[0]] = 3
            // this.x = newX
            // this.y = newY
            
            // for (var i in grassArr) {
            //     if (newX == grassArr[i].x && newY == grassArr[i].y) {
            //         grassArr.splice(i, 1);
            //         break;
            //     }
            // }
            if (this.energy >= 12) {
                //this.mul()
            }
        }else if (executers) {
            //this.energy= this.energy -0.5
            for (let i = 0; i < executers.length; i++) {
                let executer = executers[i]
                let newX = executer[0]
                let newY = executer[1]
                matrix[executer[1]][executer[0]] = 3
                let newWild = new Wild(executer[0], executer[1], 3);
                wildArr.push(newWild);
                for (var j in executerArr) {
                    if (newX == executerArr[j].x && newY ==executerArr[j].y) {
                    executerArr.splice(j, 1);
                        break;
                    }
                }
            }
            this.move()
        }else if (grass) {
            let newX = grass[0]
            let newY = grass[1]
            matrix[this.y][this.x] = 1
            let newGrass = new Grass(this.x,this.y,1)
            grassArr.push(newGrass)
            for (let i = 0; i < demonArr.length; i++) {
                if (this.x == demonArr[j].x && this.x ==demonArr[j].y) {
                    demonArr.splice(j, 1);
                    break;
                }
                
            }
            matrix[newY][newX] = 6
            // let newDemon = new Demon(newX,newY,6)
            // demonArr.push(newDemon)
            this.x = newX
            this.y = newY
            this.move()
        }else {
            this.move()
        }
        
    }
    // die() {
    //     console.log("merav");

    //     matrix[this.y][this.x] = 0
    //     for (var i in wildArr) {
    //         if (this.x == wildArr[i].x && this.y == wildArr[i].y) {
    //             wildArr.splice(i, 1);
    //             break;
    //         }
    //     }
    // }
}

