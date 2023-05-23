//import random from "node_modules/random"
////////
var server = require('http').createServer(app);

 io = require('socket.io')(server);

////////
var express = require("express");
var app = express();

app.use(express.static("../Client"));

app.get("/", function(req, res){
    
    res.redirect("index.html");
    
});

server.listen(3000, function(){
    
    console.log("Game is running in port 3000 :)");
    
});

side = 120

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
var Executer = require("./my_modules/executer")

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
    io.sockets.emit("my_matrix", matrix)
}
// var x = Math.floor(random(0, 400));
// var y = Math.floor(random(0, 400));

function kerparner(qanak, kerpar) {
    //console.log("asd")
    //console.log(111);
    var a = 0;
    while (a < qanak) {
        var x = Math.floor(Math.random()*50);
        var y = Math.floor(Math.random()*50);
        if (matrix[y][x] == 0) {
            matrix[y][x] = kerpar
        }
        a++
    }
}

for (let i = 0; i < 50; i++) {
    matrix.push([])
    for (let j = 0; j < 50; j++) {
        matrix[i].push(0)
        
    }
}

kerparner(75,1)
kerparner(50,2)
kerparner(18,3)
kerparner(7,4)
kerparner(3,5)
console.log(matrix)

createObj()
setInterval(game, 1000)
/////////
io.on('connection', function (socket) {
    socket.emit("my_matrix",matrix )
    
    
    });

