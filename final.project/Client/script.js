var socket = io()
socket.on("my_matrix", my_draw)

function setup() {
    frameRate(60);
    //createCanvas(matrix[0].length * side, matrix.length * side);
    createCanvas(2500,1250)
    background("#acacac"); //client
    canvas.className = "mycanvas";
}
//var canvas = getElementById("defaultCanvas0")


side = 50
function my_draw(matrix) {
    side = 50
    var grr = 0
    var grrEtt =  0
    var wld = 0
    var zmb = 0
    var exc = 0
    //console.log(matrix)
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
                grr++
            } else if (matrix[y][x] == 0) {
                fill("#acacac");
            } else if (matrix[y][x] == 2) {
                fill("#ffe400");
                grrEtt++
            } else if (matrix[y][x] === 3) {
                fill("orangered");
                wld++
            } else if (matrix[y][x] === 4) {
                fill("blue");
                zmb++
            } else if (matrix[y][x] === 5) {
                fill("#eb0000");
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
    //add event listener
    var start = document.getElementById("start")
    //console.log(start)
    start.addEventListener("click",() => socket.emit("start",start))
    
    var spring = document.getElementById("spring")
    spring.addEventListener("click", ()  => socket.emit("spring", spring))

    var summer = document.getElementById("summer")
    summer.addEventListener("click", ()  => socket.emit("summer", summer))
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