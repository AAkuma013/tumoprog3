//import random from "node_modules/random"
////////


////////
var express = require("express");
var app = express();

app.use(express.static("../Client"));

app.get("/", function(req, res){
    
    res.redirect("index.html");
    //res.end("hello node")
});
var server = require('http').createServer(app);


var io = require('socket.io')(server);




side = 50

matrix = [];
grassArr = [];
grassEaterArr = [];
wildArr = [];
zombieArr = [];
executerArr = [];

var Grass = require("./my_modules/grass")
var GrassEater = require("./my_modules/grassEater")
var Wild = require("./my_modules/wild")
var Zombie = require("./my_modules/zombie")
var Executer = require("./my_modules/executer");
//const { log } = require("console");

function createObj() {
    
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
                let zombie = new Zombie(x, y, 4);
                zombieArr.push(zombie);
            }
            else if (matrix[y][x] == 5) {
                let executer = new Executer(x, y, 5);
                executerArr.push(executer);
            }
        }
    }//server
}


function game() {
    //console.log("asd")
    for (var i in grassArr) {
        grassArr[i].mul();
        //console.log("eeeeeeeeeeee")
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
    io.sockets.emit("my_matrix", matrix)
}
// var x = Math.floor(random(0, 400));
// var y = Math.floor(random(0, 400));

for (let i = 0; i < 25; i++) {
    matrix.push([])
    for (let j = 0; j < 50; j++) {
        matrix[i].push(0)
        
    }
}

function kerparner(qanak, kerpar) {
    //console.log("asd")
    //console.log(111);
    var a = 0;
    while (a < qanak) {
        var x = Math.floor(Math.random()*50);
        var y = Math.floor(Math.random()*25);
        if (matrix[y][x] == 0) {
            matrix[y][x] = kerpar
        }
        a++
    }
}
////////////////////
// {
//     if (str == "spring") {
//         console.log("spring");
//         setInterval(spring, 300)
//     }else if (str == ) {
        
//     }
// }
/////////////////////////
// kerparner(400,1)
// kerparner(30,2)
// kerparner(15,3)
// kerparner(2,4)
// kerparner(15,5)
// console.log(matrix)

// createObj()


io.on('connection', function (socket) {
    console.log("jello");
    socket.emit("my_matrix", matrix )
    socket.on("start",start)
    socket.on("spring", () => {
        setInterval(spring, 300)
        //clrr = "white"
    })
    socket.on("summer", () => setInterval(summer, 300))
    // socket.on("winter", (smth) => {
    //     console.log(smth);
    // })
    //setInterval(summer, 300)
    //setInterval(spring, 300)
});
function start(){
    
    kerparner(600,1)
    kerparner(50,2)
    kerparner(25,3)
    kerparner(8,4)
    kerparner(25,5)
    createObj()
    setInterval (game, 300)
}
function summer() {
    for (let i = 0; i < grassArr.length; i++) {
        grassArr[i].multiply = 6
        //console.log(grassArr[i].multiply);
    }
    for (let j = 0; j < grassEaterArr.length; j++) {
        //console.log(grassEaterArr[j].energy);
        grassEaterArr[j].energy = grassEaterArr[j].energy -2
        //console.log(grassEaterArr[j].energy);
        
    }
    for (let j = 0; j < wildArr.length; j++) {
        //console.log(grassEaterArr[j].energy);
        wildArr[j].energy = wildArr[j].energy + 3
        //console.log(grassEaterArr[j].energy);
        
    }
    for (let j = 0; j < zombieArr.length; j++) {
        //console.log(zombieArr[j].directions);
        let newDirections = [
            [zombieArr[j].x + 1, zombieArr[j].y - 1],
            [zombieArr[j].x + 1, zombieArr[j].y + 1],
            [zombieArr[j].x - 1, zombieArr[j].y - 1],
            [zombieArr[j].x - 1, zombieArr[j].y + 1],
         ];
        zombieArr[j].directions = newDirections

        zombieArr[j].energy = zombieArr[j].energy - 1

        //console.log(zombieArr[j].directions);  
    }
    for (let j = 0; j < executerArr.length; j++) {
        //console.log(zombieArr[j].directions);
        let newDirections = [
            [executerArr[j].x, executerArr[j].y + 1],
            
            [executerArr[j].x + 1, executerArr[j].y],
           
            [executerArr[j].x, executerArr[j].y - 1],
            
            [executerArr[j].x - 1, executerArr[j].y],
            
            
         ];
        executerArr[j].directions = newDirections

        executerArr[j].energy= executerArr[j].energy + 0.5

        //console.log(executerArr[j].directions);  
    }
}




function spring() {
    for (let i = 0; i < grassArr.length; i++) {
        grassArr[i].multiply = 16
        //console.log(grassArr[i].multiply);
    }
    for (let j = 0; j < grassEaterArr.length; j++) {
        //console.log(grassEaterArr[j].energy);
        grassEaterArr[j].energy = grassEaterArr[j].energy + 4
        //console.log(grassEaterArr[j].energy);
        
    }
    for (let j = 0; j < wildArr.length; j++) {
        //console.log(grassEaterArr[j].energy);
        wildArr[j].energy = wildArr[j].energy - 1
        //console.log(grassEaterArr[j].energy);
        
    }
    for (let j = 0; j < zombieArr.length; j++) {
        //console.log(zombieArr[j].directions);
        let newDirections = [
            [zombieArr[j].x + 1, zombieArr[j].y - 1],
            [zombieArr[j].x + 1, zombieArr[j].y + 1],
         ];
        zombieArr[j].directions = newDirections

        //console.log(zombieArr[j].directions);  
    }
    for (let j = 0; j < executerArr.length; j++) {
        //console.log(zombieArr[j].directions);
        let newDirections = [
            [executerArr[j].x, executerArr[j].y + 1],
            [executerArr[j].x + 1, executerArr[j].y + 1],
            [executerArr[j].x + 1, executerArr[j].y],
            [executerArr[j].x + 1, executerArr[j].y - 1],
            [executerArr[j].x, executerArr[j].y - 1],
            [executerArr[j].x - 1, executerArr[j].y - 1],
            [executerArr[j].x - 1, executerArr[j].y],
            [executerArr[j].x - 1, executerArr[j].y + 1],
            
         ];
        executerArr[j].directions = newDirections
     //executerArr[j].energy= executerArr[j].energy + 0.5

        //console.log(executerArr[j].directions);  
    }
    // for (let y = 0; y < matrix.length; y++) {
    //     for (let x = 0; x < matrix[y].length; x++) {
    //         if (matrix[y][x] == 1) {
               
    //         }
    //     }
    // }
}







server.listen(3000, function(){
        
    console.log("Game is running in port 3000 :)");
            
});


/////////
    