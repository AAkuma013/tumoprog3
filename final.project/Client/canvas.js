// var CanvasJS = require('canvasjs');
// socket = io()


// grr = 0
// grrEtt = 0
// wld = 0
// zmb = 0
// exc = 0
// matrix = []
// console.log(grr);
///////////////////////////////////////////////////////
// var canvas = document.getElementById("canvas")
// var context = canvas.getContext("2d", { willReadFrequently: true })

// canvas.style.background = "#acacac"

// context.beginPath();



// context.closePath();
//////////////////////////////////////////////////////////////
//START STAT F
// socket.on("startStatistic", function(matrix) {
//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {
//             if (matrix[y][x] == 1) {
//                 grr++
//             } else if (matrix[y][x] == 2) {
//                 grrEtt++
//             } else if (matrix[y][x] === 3) {
//                 wld++
//             } else if (matrix[y][x] === 4) {
//                 zmb++
//             } else if (matrix[y][x] === 5) {
//                 exc++
//             }
//             chart.render();
//         }
//     }    
// })


// var chart = new CanvasJS.Chart("chartContainer", {
//     willReadFrequently: true,
//     exportEnabled: true,
//     animationEnabled: true,
//     theme: "dark1", // "light1", "light2", "dark1", "dark2"
//     title:{
//         text: "Mobs"
//     },
//     axisY: {
//         title: "Amount"
//     },
//     data: [{        
//         type: "column",  
//         // showInLegend: true, 
//         // legendMarkerColor: "grey",
//         // legendText: "",
//         dataPoints: [{ "y": grr, "label": "Grass" },{ "y": grrEtt,  "label": "GrassEater" },{ "y": wld,  "label": "Wild" },{ "y": zmb,  "label": "Zombie" },{ "y": exc,  "label": "Executer" },]
//     }]
// });
// chart.render();
    // START CLICKED F


