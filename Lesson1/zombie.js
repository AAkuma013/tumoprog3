class Zombie extends LivingCreature {
  constructor(x, y, index) {
    super(x, y, index);
    this.energy = 20;
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y + 1],
      [this.x + 1, this.y + 1],
    ];
  }
    getNewCoordinates() {
      this.directions = [
        [this.x - 1, this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y + 1],
        [this.x + 1, this.y + 1],
      ];
    }
  
  
    chooseCell(character, character2) {
      this.getNewCoordinates();
      return super.chooseCell(character,character2);
    }
    
    /*
      mul() {
          var newCell = random(this.chooseCell(0));
          if (newCell) {
              var newZmbie = new Zombie(newCell[0], newCell[1], this.index);
              wildArr.push(newWild);
              matrix[newCell[1]][newCell[0]] = 4;
              this.energy = 8
          }
      }
      */
    move() {
      this.energy--;
  
      console.log(this.energy);
      let emptyCells = this.chooseCell(0);
      let newCell = random(emptyCells);
      if (newCell) {
        let newX = newCell[0];
        let newY = newCell[1];
        matrix[this.y][this.x] = 0;
        matrix[newY][newX] = 4;
        this.x = newX;
        this.y = newY;
      }
      if (this.energy <= 0) {
        this.die();
      }
    }
  
    tox() {
      let foods = this.chooseCell(2, 3);
      let food = random(foods);
      let grasses = this.chooseCell(1,1)
      let grass = random(grasses)
      let voids = this.chooseCell(0,0)
      let voidPlace = random(voids)
      if (food) {
        this.energy++;
        let newX = food[0];
        let newY = food[1];
        matrix[food[1]][food[0]] = 4;
        let newZombie = new Zombie(food[0], food[1], 4);
        zombieArr.push(newZombie);
        for (var i in grassEaterArr) {
          if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
            grassEaterArr.splice(i, 1);
            break;
          }
        }
        for (var i in wildArr) {
          if (newX == wildArr[i].x && newY == wildArr[i].y) {
            wildArr.splice(i, 1);
            break;
          }
        }
        this.move();
      }
        else if(voidPlace){
          this.move();
        
      } /*else if (grass) {
          this.energy--;
          let newX = grass[0]
          let newY = grass[1]
          matrix[grass[1],grass[0]] = 4
          let newZombie = new Zombie(grass[0], grass[1], 4);
          zombieArr.push(newZombie);
          matrix[this.y,this.x] = 1
          let newGrass = new Grass(this.x, this.y, 1);
          grassArr.push(newGrass);
          this.x = newX
          this.y = newY
      }*/
    }
    die() {
      console.log("merav");
  
      matrix[this.y][this.x] = 0;
      for (var i in zombieArr) {
        if (this.x == zombieArr[i].x && this.y == zombieArr[i].y) {
          zombieArr.splice(i, 1);
          break;
        }
      }
    }
  }