var express = require("express");

var app = express();

app.use(express.static("../Client"));

app.get("/", function(req, res){

res.redirect("index.html");

});

app.listen(3000, function(){

console.log("Game is running in port 3000 :)");

});

var Grass = require("./my_modules/grass")
var GrassEater = require("./my_modules/grassEater")
var wild = require("./my_modules/wild")
var zombie = require("./my_modules/zombie")
var executer = require("./my_modules/executer")


var matrix = [];

function kerparner(qanak, kerpar) {
    console.log(111);
    var a = 0;
    while (a < qanak) {
        var x = Math.floor(random(0, 40));
        var y = Math.floor(random(0, 40));
        if (matrix[y][x] == 0) {
            matrix[y][x] = kerpar
        }
        a++
    }
}

for (let i = 0; i < 40; i++) {
    matrix.push([])
    for (let j = 0; j < 40; j++) {
        matrix[i].push(0)
        
    }
}

kerparner(75,1)
kerparner(50,2)
kerparner(18,3)
kerparner(7,4)
kerparner(3,5)
