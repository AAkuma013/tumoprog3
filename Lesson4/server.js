// var esim = document.getElementById("err")
// esim.addEventListener("click", clickHandler)
// console.log(esim);

// var clickCount = 0;
// function clickHandler(evt) {

//     clickCount++; 

// console.log(evt);
// console.log(clickCount);

// var str = "Thanks for clicking " + clickCount;
// console.log(str);
// this.innerText = str;


// }

// var esim = document.getElementById("pElement");
// var miban = document.getElementById("b")
// esim.addEventListener("click", clickHandler);
// miban.addEventListener("click", clickHandler);

// function bodyClick(evt){

//     console.log("Clicked at X: " + evt.pageX + ", Y: " + evt.pageY);

//     }

//     window.onclick = bodyClick;
//     console.log();
// function keydown(evt) {
//     console.log(evt);
//     console.log("You printed " + evt.key);

//     }

//     window.onkeydown = keydown;

// .addEventListener('keydown', keydown);



var express = require('express');

var app = express();

var server = require('http').createServer(app);

var io = require('socket.io')(server);

var messages = [];

app.use(express.static("."));

app.get('/', function (req, res) {

    res.redirect('index.html');

});

io.on('connection', function (socket) {

    for (var i in messages) {

        socket.emit("display message", messages[i]);

    }

    socket.on("send message", function (data) {

        messages.push(data);

        io.sockets.emit("display message", data);

    });

});

server.listen(3000);