/*class Person{
    constructor(name,lastname,age){
        
        this.name = name,
        this.lastname = lastname,
        this.age = age

    }
    sayname(){
        console.log(this.name);
        
    }
}

let person = new Person("egtrhtrh","ergthr",45)
person.sayname()


*/
/////////////////////////////////////////////////////////////////////////////////////
/*
class Cat {
    constructor(x,y, name) {
       this.x = x;
       this.y = y;
       this.name = name;
       this.energy = 8;
       this.hungry = true;
       this.mouseCount = 0;
    }
    move() {
        this.x++;
        this.y++;
    }

    eat() {
        this.energy++
        this.mouseCount++
        if (this.mouseCount >=3) {
            this.hungry = false
        }
    }
}

let cat1 = new Cat(5,5,"Tom")
console.log(cat1);

cat1.move()
console.log(cat1);
cat1.eat()
console.log(cat1);
cat1.eat()
cat1.eat()
console.log(cat1);*/
//////////////////////////////////////////////////////////////////////////////////////
/*var side = 50
var n = 8
var m = 8

function setup() {
  frameRate(13)
  createCanvas(400,400);
  background('#acacac');
  //noStroke();
  let matrix = []
  for (let i = 0; i < n; i++) {
    matrix[i]=[]
    for (let j = 0; j < m; j++) {
      matrix[i][j] = Math.round(random(2))
      
    }
    
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {

        if (matrix[i][j] == 1) {
          fill("green")
          rect(j*side,i*side,side,side)
          //textSize(32);
          //ill("black");
          //text(1, x*side, 20, 80, 80);

        }

        else if (matrix[i][j] == 2) {
          fill("yellow")
          rect(j*side,i*side,side,side)

        }
        
        else{
          fill("white")
          rect(j*side,i*side,side,side)
        }
        
    }

  }
}
function draw() {
  

}
*/
//////////////////////////////
/*var matrix = [
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 4, 0,
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 4,
    ],
    [
        0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0,
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0,
    ],
    [
        0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0,
        0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0,
    ],
    [
        0, 0, 0, 1, 0, 1, 0, 1, 3, 1, 0, 4, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
        0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
        0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0,
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 3, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0,
    ],
    [
        0, 0, 0, 5, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
        0, 0, 0, 0, 0, 4, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 5, 5, 1, 0, 1, 0, 1, 0, 0,
        0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
    ],
    [
        0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0,1, 0, 1, 0, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
        0, 0, 0, 0, 3, 0, 1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 5,
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 5, 0,
        0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 3, 0,
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 2, 0, 0, 0, 0, 0, 0, 0,
        1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 2,
        1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
    ],
];*/ //server
var matrix = []
//let n = parseInt(prompt("wegdfrgr")); 
//et m = parseInt(prompt("dfbhfghng"));


function kerparner(qanak, kerpar) {
    console.log(111);
    var a = 0;
    while (a < qanak) {
        var x = Math.floor(random(0, n));
        var y = Math.floor(random(0, m));
        if (matrix[y][x] == 0) {
            matrix[y][x] = kerpar
        }
        a++
    }
}






var side = 25;

var grassArr = [];
var grassEaterArr = [];
var wildArr = [];
var zombieArr = [];
var executerArr = [];//server

function setup() {

    for (let i = 0; i < n; i++) {
        matrix.push([])
        for (let j = 0; j < m; j++) {
            matrix[i].push(0)
            
        }
    }
    
    kerparner(75,1)
    kerparner(50,2)
    kerparner(18,3)
    kerparner(7,4)
    kerparner(3,5)
    
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background("#acacac"); //client
    
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[0].length; x++) {
            if (matrix[y][x] === 1) {
                let grass = new Grass(x, y, 1);
                grassArr.push(grass);
            } else if (matrix[y][x] === 2) {
                let grassEater = new GrassEater(x, y, 2);
                grassEaterArr.push(grassEater);
            }
            else if (matrix[y][x] == 3) {
                let wild = new Wild(x, y, 3);
                wildArr.push(wild);
            }
            else if (matrix[y][x] == 4) {
                let zombie = new Zombie(x, y, 3);
                zombieArr.push(zombie);
            }
            else if (matrix[y][x] == 5) {
                let executer = new Executer(x, y, 3);
                executerArr.push(executer);
            }
        }
    }//server
    console.log(executerArr);
}

function draw() {
    var grr = 0
    var grrEtt =  0
    var wld = 0
    var zmb = 0
    var exc = 0
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
                grr++
            } else if (matrix[y][x] == 0) {
                fill("#acacac");
            } else if (matrix[y][x] == 2) {
                fill("yellow");
                grrEtt++
            } else if (matrix[y][x] === 3) {
                fill("orange");
                wld++
            } else if (matrix[y][x] === 4) {
                fill("blue");
                zmb++
            } else if (matrix[y][x] === 5) {
                fill("red");
                exc++
            }
            rect(x * side, y * side, side, side);//client
            
            //textSize(20);
            //fill("blue");
            
        
            document.getElementById("gagulik").innerHTML  = "grass: "+grr
            document.getElementById("ett").innerHTML  = "grassEater: "+grrEtt
            document.getElementById("wld").innerHTML  = "wild: "+wld
            document.getElementById("zmb").innerHTML  = "zombie: "+zmb
            document.getElementById("exc").innerHTML  = "executer: "+exc
            //text(x + " " + y, x * side + side / 2, y * side + side / 2);

        }
    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for (var i in wildArr) {
        wildArr[i].eat();
    }
    for (var i in zombieArr) {
        zombieArr[i].tox();
    }
    for (var i in executerArr) {
        executerArr[i].execute();
    }//server
    
}