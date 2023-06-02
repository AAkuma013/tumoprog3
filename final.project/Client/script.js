// import CanvasJS from 'canvasjs' assert{type: 'module'};

var socket = io();
socket.on("my_matrix", my_draw);

function setup() {
  frameRate(60);
  //createCanvas(matrix[0].length * side, matrix.length * side);
  createCanvas(2500, 1250);
  background("#acacac"); //client
  canvas.className = "mycanvas";
}
//var canvas = getElementById("defaultCanvas0")
var clrr = "green";
function retrn(randcl) {
  clrr = randcl;
  console.log("exxaavvv");
  var gagulik = document.getElementById("gagulik");
  gagulik.style.backgroundColor = randcl;
  //document.getElementById("gagulik").innerHTML.background = "white"
  return clrr;
}
side = 50;

// function sendServ() {
//     socket.emit("sendServ", "true")
// }

// export function getVariableGrr() {
//     return grr;
//   }

// export function getVariableGrrErr() {
//     return grrEtt;
//   }

//   export function getVariableWld() {
//     return wld;
//   }

//   export function getVariableZmb() {
//     return zmb;
//   }

//   export function getVariableExc() {
//     return exc;
//   }
// grassArr = []
// var finalCount = 0
function my_draw(matrix) {
    side = 50;
    var grr = 0;
    var grrEtt = 0;
    var wld = 0;
    var zmb = 0;
    var exc = 0;
    // var count = 0
    
    // socket.on("recieveMul", () =>{
    //     for (let i = 0; i < grassArr.length; i++) {
            
    //         count = count + grassArr[i].newCellCount
    //         finalCount = count + finalCount
    //     }
    //     console.log(finalCount);
    //     socket.emit("recieveMulBack",finalCount)
    // })    
    var chart = new CanvasJS.Chart("chartContainer", {
        willReadFrequently: true,
        animationEnabled: false,
        theme: "dark2", // "light1", "light2", "dark1", "dark2"
        title: {
        text: "Mobs data",
        },
        axisY: {
        title: "Amount",
        },
        data: [
        {
            type: "column",
            // showInLegend: true,
            // legendMarkerColor: "grey",
            // legendText: "",
            dataPoints: [
            { y: grr, label: "GRASS" },
            { y: grrEtt, label: "GRASSEATER" },
            { y: wld, label: "WILD" },
            { y: zmb, label: "ZOMBIE" },
            { y: exc, label: "EXECUTER" },
            ],
        },
        ],
    });

    var canvasStat = document.getElementById("chartContainer").getElementsByTagName("canvas")[0];

    var context = canvasStat.getContext("2d", { willReadFrequently: true });
    
    if (context) {
        context.willReadFrequently = true;
        context.imageSmoothingEnabled = false;
        console.log("TTRRRUUEEE");
    }

  // Set willReadFrequently attribute to true

  //var diagramContainer = document.getElementById("diagramCanvas")
  //const graph = new mxGraph(diagramContainer)
  // function alrt() {
  //     console.log(grr, grrEtt, wld, zmb, exc);
  // }
  // var count = 0
  // var count1 = []
  // var count2 = []
  // var count3 = []
  // var count4 = []
  // var count5 = []
  /////////////////////////////////////////////////////
  //var ozu = []
  // socket.on("memory", function meme(weath) {
  //     socket.emit("mem.ret", weath)
  // })
  /////////////////////////////////////////////
  //console.log(matrix)
  //var clrr = "green"

  // function retrn() {
  //     if (spring.clicked == true) {
  //         return "white"
  //     }else{
  //         console.log(spring.clicked);
  //         return "green"
  //     }
  // }
  // spring.onclick = function() {
  //
  //AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
  //clrr = "white"
  // }
  // $('#spring').on('click', function(){
  //     clrr = "white"
  //     return clrr
  // });
  // function retrn() {
  //     clrr = "white"
  //     return clrr
  // }

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                // spring.onclick = function(clrr) {
                //     clrr = "white"
                //     return clrr
                // }
                fill(clrr);
                grr++;
            } else if (matrix[y][x] == 0) {
                fill("#acacac");
            } else if (matrix[y][x] == 2) {
                fill("#ffe400");
                grrEtt++;
            } else if (matrix[y][x] === 3) {
                fill("orangered");
                wld++;
            } else if (matrix[y][x] === 4) {
                fill("blue");
                zmb++;
            } else if (matrix[y][x] === 5) {
                fill("#eb0000");
                exc++;
            }
            rect(x * side, y * side, side, side); //client
            
        

        //textSize(20);
        //fill("blue");

            document.getElementById("gagulik").innerHTML = "grass: " + grr;
            document.getElementById("ett").innerHTML = "grassEater: " + grrEtt;
            document.getElementById("wld").innerHTML = "wild: " + wld;
            document.getElementById("zmb").innerHTML = "zombie: " + zmb;
            document.getElementById("exc").innerHTML = "executer: " + exc;
            //text(x + " " + y, x * side + side / 2, y * side + side / 2);
        }
    }
    
    chart.options.data[0].dataPoints = [
        { y: grr, label: "Grass" },
        { y: grrEtt, label: "GrassEater" },
        { y: wld, label: "Wild" },
        { y: zmb, label: "Zombie" },
        { y: exc, label: "Executer" },
    ];
    chart.options.willReadFrequently = true
    chart.render()
    
    // setInterval(() => {
    //     console.log("helllllno")
    //     }, 10000);
    //add event listener
    var start = document.getElementById("start");
    //console.log(start)
    start.addEventListener("click", () => socket.emit("start", start));

    var ess;

    //
    var spring = document.getElementById("spring");
    spring.addEventListener("click", () => {
        socket.emit("spring", "spring");
        ess = "spring";
        document.getElementById("weather").innerHTML = "weather: " + ess;
    });

    var summer = document.getElementById("summer");
    summer.addEventListener("click", () => {
        socket.emit("summer", "summer");
        ess = "summer";
        document.getElementById("weather").innerHTML = "weather: " + ess;
    });
    //console.log(document.getElementById("weather"));
    var autumn = document.getElementById("autumn");
    autumn.addEventListener("click", () => {
        socket.emit("autumn", "autumn");
        ess = "autumn";
        document.getElementById("weather").innerHTML = "weather: " + ess;
    });

    var winter = document.getElementById("winter");
    winter.addEventListener("click", () => {
        socket.emit("winter", "winter");
        ess = "winter";
        document.getElementById("weather").innerHTML = "weather: " + ess;
    });

    // var winter = document.getElementById("winter")
    // socket.emit("winter", winter)
    // for (var i in grassArr) {
    //     grassArr[i].mul();
    // }
    // for (var i in grassEaterArr) {
    //     grassEaterArr[i].eat();
    // }
    // for (var i in wildArr) {
    //     wildArr[i].eat();
    // }
    // for (var i in zombieArr) {
    //     zombieArr[i].tox();
    // }
    // for (var i in executerArr) {
    //     executerArr[i].execute();
    // }//server
}
