/*var fs = require('fs');

function main(){

var file = "hello.txt";

fs.appendFileSync(file, "ehefheufheufheufheufheufheufheuhfeuhfeuh\n");

}

main(); */

var express = require("express");

var app = express();

app.get("/", function(req, res){

res.send("<h1>Hello world</h1>");

});

app.get("/name/:name", function(req, res){

var name = req.params.name;

res.send("<h1>Hello " + name +"</h1>");

});

app.get("/google", function(req, res){

    res.redirect("https://google.com");
    
});

app.get("/google/:search", function(req, res){
    var search = req.params.search

    res.redirect("https://google.com/search?q="+search);
    
});



app.get("/*", function(req, res, err){

    res.status(404).send('<h1>ERROR 404</h1>');
    
});



app.listen(3000, function(){

console.log("Example is running on port 3000");

});
