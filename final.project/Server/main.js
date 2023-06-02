//import random from "node_modules/random"
////////


////////
var express = require("express");
const fs = require('fs');
var app = express();

app.use(express.static("../Client"));

app.get("/", function(req, res){
    
    res.redirect("index.html");
    //res.end("hello node")
});
var server = require('http').createServer(app);


var io = require('socket.io')(server);



// Example data



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
const { log } = require("console");
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
        //console.log(mulGrr)
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
// var Spr
// var Smm
// var Aut
// var Wnt
// var ozu = []


var count = 0

io.on('connection', function (socket) {
    var intervalID = null;
    console.log("jello");
    socket.emit("my_matrix", matrix )
    socket.on("start",start)

    ////////////////////////////
    socket.on('newCellCount', (newCellCount) => {
        // socket.emit("recieveMul", "yesss")
        // console.log("server recieved mul and send it to client :)");
        count = count + newCellCount
        const filePath = './package.json';
        setInterval(() => {
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                  console.error('Error reading package.json file:', err);
                  return;
                }
              
                // Parse the contents into a JavaScript object
                const jsonData = JSON.parse(data);
              
                // Update the specific variable in the JavaScript object
                jsonData.GrassMul = count;
              
                // Convert the JavaScript object back to JSON string
                const jsonGrass = JSON.stringify(jsonData, null, 2);
              
                // Write the updated data back to the package.json file
                fs.writeFile(filePath, jsonGrass, (err) => {
                  if (err) {
                    console.error('Error writing to package.json file:', err);
                    return;
                  }
                  console.log('Variable updated in package.json file successfully.');
                });
              });
        }, 60000);
        // Perform your desired actions with the newCellCount value here
        // For example, you can store it in a database, update a web page, etc.
      });
      
//     socket.on("recieveMulBack",(finalCount)=> {
//         const jsonData = { "grass.mul": finalCount };

//         // Convert the data to a JSON string
//         const jsonString = JSON.stringify(jsonData);

//         // Specify the file path
//         const filePath = './package.json';

//         // Write the data to the JSON file
//         setTimeout(() => {
//             fs.writeFile(filePath, jsonString, (err) => {
//                 if (err) {
//                     console.error('Error writing to JSON file:', err);
//                     return;
//                 }
//                 console.log('Data written to JSON file successfully.');
//         }, 10000);
// });
//     })
      
      // Variable to store the interval ID
    
    socket.on("spring", function(){
        console.log("SPRING");
        clearInterval(intervalID); // Clear the previous interval
        springDir();
        intervalID = setInterval(spring, 350);
    });

    socket.on("summer", function(){
        console.log("SUMMER");
        clearInterval(intervalID); // Clear the previous interval
        summerDir();
        intervalID = setInterval(summer, 350);
    });

    socket.on("autumn", function(){
        console.log("AUTUMN");
        clearInterval(intervalID); // Clear the previous interval
        autumnDir();
        intervalID = setInterval(autumn, 350);
    });

    socket.on("winter", function(){
        console.log("WINTER");
        clearInterval(intervalID); // Clear the previous interval
        winterDir();
        intervalID = setInterval(winter, 350);
    });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 // socket.on("spring", function(){
    //     console.log("SPRING");
    //     //clearInterval(intervalID); // Clear the previous interval
    //     springDir();
    //     //intervalID = 
    //     setInterval(spring, 350);
    // });

    // socket.on("summer", function(){
    //     console.log("SUMMER");
    //     //clearInterval(intervalID); // Clear the previous interval
    //     summerDir();
    //     //intervalID = 
    //     setInterval(summer, 350);
    // });

    // socket.on("autumn", function(){
    //     console.log("AUTUMN");
    //     //clearInterval(intervalID); // Clear the previous interval
    //     autumnDir();
    //     //intervalID = 
    //     setInterval(autumn, 350);
    // });

    // socket.on("winter", function(){
    //     console.log("WINTER");
    //     //clearInterval(intervalID); // Clear the previous interval
    //     winterDir();
    //     //intervalID = 
    //     setInterval(winter, 350);
    // });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    ////////////////////
    // socket.on("spring", function(){
    //      console.log("SPRING");
    //     // ozu.push(memory)
    //     // if (ozu[0].length > 1) {
    //     //     giveThePrevWeather(memory)
    //     // }
    //     springDir()
    //     setInterval(spring,350)
    // })
    
    // socket.on("summer", function(){
    //      console.log("SUMMER");
    //     // ozu.push(memory)
    //     // if (ozu[0].length > 1) {
    //     //     giveThePrevWeather(memory)
    //     // }
    //     summerDir()
    //     setInterval(summer,350)
    // })
    
    // socket.on("autumn", function(){
    //      console.log("AUTUMN");
    //     // ozu.push(memory)
    //     // if (ozu[0].length > 1) {
    //     //     giveThePrevWeather(memory)
    //     // } 
    //     autumnDir()
    //     setInterval(autumn,350)
    // })
    
    // socket.on("winter", function(){
    //     console.log("WINTER");
    //     //  ozu.push(memory)
    //     // console.log(ozu[-1].length);
    //     // if (ozu[0].length > 1) {
    //     //     giveThePrevWeather(memory)
    //     // }
    //     winterDir()
    //     setInterval(winter,350)
    // })
    // socket.on("summer", () => setInterval(summer, 350))
    // socket.on("autumn", () => setInterval(autumn, 350))
    // socket.on("winter", () => setInterval(winter, 350))
    // socket.on("winter", (smth) => {
    //     console.log(smth);
    // })
    //setInterval(summer, 300)
    //setInterval(spring, 300)

function start(){
    
    kerparner(600,1)
    kerparner(50,2)
    kerparner(25,3)
    kerparner(8,4)
    kerparner(25,5)
    createObj()
    setInterval (game, 350)
}
function winterDir() {
    for (let j = 0; j < zombieArr.length; j++) {
        //console.log(zombieArr[j].directions);
        var newDirectionsZ = [
            
            [zombieArr[j].x + 1, zombieArr[j].y - 1],
            [zombieArr[j].x, zombieArr[j].y + 1],
            [zombieArr[j].x + 1, zombieArr[j].y + 1],
            [zombieArr[j].x + 1, zombieArr[j].y],
            [zombieArr[j].x - 1, zombieArr[j].y - 1],
            [zombieArr[j].x, zombieArr[j].y - 1],
            [zombieArr[j].x - 1, zombieArr[j].y + 1],
            [zombieArr[j].x - 1, zombieArr[j].y],
         ];
        zombieArr[j].directions = newDirectionsZ

        // zombieArr[j].energy = zombieArr[j].energy + 0.3

        //console.log(zombieArr[j].directions);  
    }
    for (let j = 0; j < executerArr.length; j++) {
        //console.log(zombieArr[j].directions);
        var newDirectionsE = [
            [executerArr[j].x, executerArr[j].y + 1],
            [executerArr[j].x, executerArr[j].y - 1],
            
         ];
        executerArr[j].directions = newDirectionsE
        //console.log(executerArr[j].directions);

        // executerArr[j].energy= executerArr[j].energy - 0.005

        //console.log(executerArr[j].directions);  
    }
}

function winter() {
    for (let i = 0; i < grassArr.length; i++) {
        grassArr[i].multiply = grassArr[i].multiply + 0.01
        //console.log(grassArr[i].multiply);
    }
    for (let j = 0; j < grassEaterArr.length; j++) {
        //console.log(grassEaterArr[j].energy);
        grassEaterArr[j].energy = grassEaterArr[j].energy - 0.1
        //console.log(grassEaterArr[j].energy);
        
    }
    for (let j = 0; j < wildArr.length; j++) {
        //console.log(grassEaterArr[j].energy);
        wildArr[j].energy = wildArr[j].energy + 0.3
        //console.log(wildArr[j].energy);
        
    }
    for (let j = 0; j < zombieArr.length; j++) {
        //console.log(zombieArr[j].directions);
        // var newDirectionsZ = [
            
        //     [zombieArr[j].x + 1, zombieArr[j].y - 1],
        //     [zombieArr[j].x, zombieArr[j].y + 1],
        //     [zombieArr[j].x + 1, zombieArr[j].y + 1],
        //     [zombieArr[j].x + 1, zombieArr[j].y],
        //     [zombieArr[j].x - 1, zombieArr[j].y - 1],
        //     [zombieArr[j].x, zombieArr[j].y - 1],
        //     [zombieArr[j].x - 1, zombieArr[j].y + 1],
        //     [zombieArr[j].x - 1, zombieArr[j].y],
        //  ];
        // zombieArr[j].directions = newDirectionsZ

        zombieArr[j].energy = zombieArr[j].energy + 0.3

        //console.log(zombieArr[j].directions);  
    }
    for (let j = 0; j < executerArr.length; j++) {
        //console.log(zombieArr[j].directions);
        // var newDirectionsE = [
        //     [executerArr[j].x, executerArr[j].y + 1],
        //     [executerArr[j].x, executerArr[j].y - 1],
            
        //  ];
        // executerArr[j].directions = newDirectionsE
        //console.log(executerArr[j].directions);

        executerArr[j].energy= executerArr[j].energy - 0.005

        //console.log(executerArr[j].directions);  
    }
}

function autumnDir() {
    for (let j = 0; j < zombieArr.length; j++) {
        //console.log(zombieArr[j].directions);
        var newDirectionsZ = [
            [zombieArr[j].x + 1, zombieArr[j].y - 1],
            [zombieArr[j].x + 1, zombieArr[j].y + 1],
            [zombieArr[j].x - 1, zombieArr[j].y - 1],
            [zombieArr[j].x - 1, zombieArr[j].y + 1],
         ];
        zombieArr[j].directions = newDirectionsZ

        //zombieArr[j].energy = zombieArr[j].energy + 0.2

        //console.log(zombieArr[j].directions);  
    }
    for (let j = 0; j < executerArr.length; j++) {
        //console.log(zombieArr[j].directions);
        var newDirectionsE = [
            [executerArr[j].x, executerArr[j].y + 1],
            
            [executerArr[j].x + 1, executerArr[j].y],
           
            [executerArr[j].x, executerArr[j].y - 1],
            
            [executerArr[j].x - 1, executerArr[j].y],
            
            
         ];
        executerArr[j].directions = newDirectionsE

        //executerArr[j].energy= executerArr[j].energy + 0.05

        //console.log(executerArr[j].directions);  
    }
}

function autumn() {
    for (let i = 0; i < grassArr.length; i++) {
        grassArr[i].multiply = grassArr[i].multiply + 0.3
        //console.log(grassArr[i].multiply);
    }
    for (let j = 0; j < grassEaterArr.length; j++) {
        //console.log(grassEaterArr[j].energy);
        grassEaterArr[j].energy = grassEaterArr[j].energy + 0.4
        //console.log(grassEaterArr[j].energy);
        
    }
    for (let j = 0; j < wildArr.length; j++) {
        //console.log(grassEaterArr[j].energy);
        wildArr[j].energy = wildArr[j].energy - 0.2
        //console.log(wildArr[j].energy);
        
    }
    for (let j = 0; j < zombieArr.length; j++) {
        //console.log(zombieArr[j].directions);
        // var newDirectionsZ = [
        //     [zombieArr[j].x + 1, zombieArr[j].y - 1],
        //     [zombieArr[j].x + 1, zombieArr[j].y + 1],
        //     [zombieArr[j].x - 1, zombieArr[j].y - 1],
        //     [zombieArr[j].x - 1, zombieArr[j].y + 1],
        //  ];
        // zombieArr[j].directions = newDirectionsZ

        zombieArr[j].energy = zombieArr[j].energy + 0.2

        //console.log(zombieArr[j].directions);  
    }
    for (let j = 0; j < executerArr.length; j++) {
        //console.log(zombieArr[j].directions);
        // var newDirectionsE = [
        //     [executerArr[j].x, executerArr[j].y + 1],
            
        //     [executerArr[j].x + 1, executerArr[j].y],
           
        //     [executerArr[j].x, executerArr[j].y - 1],
            
        //     [executerArr[j].x - 1, executerArr[j].y],
            
            
        //  ];
        // executerArr[j].directions = newDirectionsE

        executerArr[j].energy= executerArr[j].energy + 0.09

        //console.log(executerArr[j].directions);  
    }
}

function summerDir() {
    for (let j = 0; j < zombieArr.length; j++) {
        //console.log(zombieArr[j].directions);
        var newDirectionsZ = [
            [zombieArr[j].x + 1, zombieArr[j].y - 1],
            [zombieArr[j].x + 1, zombieArr[j].y + 1],
            [zombieArr[j].x - 1, zombieArr[j].y - 1],
            [zombieArr[j].x - 1, zombieArr[j].y + 1],
         ];
        zombieArr[j].directions = newDirectionsZ


        //zombieArr[j].energy = zombieArr[j].energy - 0.2

        //console.log(zombieArr[j].directions);  
    }
    for (let j = 0; j < executerArr.length; j++) {
        //console.log(zombieArr[j].directions);
        var newDirectionsE = [
            [executerArr[j].x, executerArr[j].y + 1],
            
            [executerArr[j].x + 1, executerArr[j].y],
           
            [executerArr[j].x, executerArr[j].y - 1],
            
            [executerArr[j].x - 1, executerArr[j].y],
            
            
         ];
        executerArr[j].directions = newDirectionsE

        //executerArr[j].energy= executerArr[j].energy - 0.05

        //console.log(executerArr[j].directions);  
    }
}

function summer() {
    for (let i = 0; i < grassArr.length; i++) {
        grassArr[i].multiply = grassArr[i].multiply - 0.1
        //console.log(grassArr[i].multiply);
    }
    for (let j = 0; j < grassEaterArr.length; j++) {
        //console.log(grassEaterArr[j].energy);
        grassEaterArr[j].energy = grassEaterArr[j].energy - 0.2
        //console.log(grassEaterArr[j].energy);
        
    }
    for (let j = 0; j < wildArr.length; j++) {
        //console.log(grassEaterArr[j].energy);
        wildArr[j].energy = wildArr[j].energy + 0.5
        //console.log(grassEaterArr[j].energy);
        
    }
    for (let j = 0; j < zombieArr.length; j++) {
        //console.log(zombieArr[j].directions);
        // var newDirectionsZ = [
        //     [zombieArr[j].x + 1, zombieArr[j].y - 1],
        //     [zombieArr[j].x + 1, zombieArr[j].y + 1],
        //     [zombieArr[j].x - 1, zombieArr[j].y - 1],
        //     [zombieArr[j].x - 1, zombieArr[j].y + 1],
        //  ];
        // zombieArr[j].directions = newDirectionsZ


        zombieArr[j].energy = zombieArr[j].energy - 0.19

        //console.log(zombieArr[j].directions);  
    }
    for (let j = 0; j < executerArr.length; j++) {
        //console.log(zombieArr[j].directions);
        // var newDirectionsE = [
        //     [executerArr[j].x, executerArr[j].y + 1],
            
        //     [executerArr[j].x + 1, executerArr[j].y],
           
        //     [executerArr[j].x, executerArr[j].y - 1],
            
        //     [executerArr[j].x - 1, executerArr[j].y],
            
            
        //  ];
        // executerArr[j].directions = newDirectionsE

        executerArr[j].energy= executerArr[j].energy - 0.03

        //console.log(executerArr[j].directions);  
    }
}

function springDir() {
    for (let j = 0; j < zombieArr.length; j++) {
        //console.log(zombieArr[j].directions);
        var newDirectionsZ = [
            [zombieArr[j].x + 1, zombieArr[j].y - 1],
            [zombieArr[j].x + 1, zombieArr[j].y + 1],
         ];
        zombieArr[j].directions = newDirectionsZ
    
        //console.log(zombieArr[j].directions);  
    }
    for (let j = 0; j < executerArr.length; j++) {
        //console.log(zombieArr[j].directions);
        var newDirectionsE = [
            [executerArr[j].x, executerArr[j].y + 1],
            [executerArr[j].x + 1, executerArr[j].y + 1],
            [executerArr[j].x + 1, executerArr[j].y],
            [executerArr[j].x + 1, executerArr[j].y - 1],
            [executerArr[j].x, executerArr[j].y - 1],
            [executerArr[j].x - 1, executerArr[j].y - 1],
            [executerArr[j].x - 1, executerArr[j].y],
            [executerArr[j].x - 1, executerArr[j].y + 1],
            
         ];
        executerArr[j].directions = newDirectionsE
     //executerArr[j].energy= executerArr[j].energy + 0.5
    
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
        grassEaterArr[j].energy = grassEaterArr[j].energy + 0.6
        //console.log(grassEaterArr[j].energy);
        
    }
    for (let j = 0; j < wildArr.length; j++) {
        //console.log(grassEaterArr[j].energy);
        wildArr[j].energy = wildArr[j].energy - 0.3
        //console.log(grassEaterArr[j].energy);
        
    }
    // for (let j = 0; j < zombieArr.length; j++) {
    //     //console.log(zombieArr[j].directions);
    //     // var newDirectionsZ = [
    //     //     [zombieArr[j].x + 1, zombieArr[j].y - 1],
    //     //     [zombieArr[j].x + 1, zombieArr[j].y + 1],
    //     //  ];
    //     // zombieArr[j].directions = newDirectionsZ

    //     //console.log(zombieArr[j].directions);  
    // }
    // for (let j = 0; j < executerArr.length; j++) {
    //     //console.log(zombieArr[j].directions);
    //     // var newDirectionsE = [
    //     //     [executerArr[j].x, executerArr[j].y + 1],
    //     //     [executerArr[j].x + 1, executerArr[j].y + 1],
    //     //     [executerArr[j].x + 1, executerArr[j].y],
    //     //     [executerArr[j].x + 1, executerArr[j].y - 1],
    //     //     [executerArr[j].x, executerArr[j].y - 1],
    //     //     [executerArr[j].x - 1, executerArr[j].y - 1],
    //     //     [executerArr[j].x - 1, executerArr[j].y],
    //     //     [executerArr[j].x - 1, executerArr[j].y + 1],
            
    //     //  ];
    //     // executerArr[j].directions = newDirectionsE
    //  //executerArr[j].energy= executerArr[j].energy + 0.5

    //     //console.log(executerArr[j].directions);  
    // }
    // for (let y = 0; y < matrix.length; y++) {
    //     for (let x = 0; x < matrix[y].length; x++) {
    //         if (matrix[y][x] == 1) {
               
    //         }
    //     }
    // }
}
// function giveThePrevWeather(weath) {
//     if (weath == "spring") {
//         clearInterval(Spr)
//     }else if (weath == "summer") {
//         clearInterval(Smm)
//     }else if (weath == "autumn") {
//         clearInterval(Aut)
//     }else if (weath == "winter") {
//         clearInterval(Wnt)
//     }
// }






server.listen(3000, function(){
        
    console.log("Game is running in port 3000 :)");
            
});


/////////
    