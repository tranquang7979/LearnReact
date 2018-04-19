var express = require("express");
var bodyParser = require("body-parser");
var parser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json();
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(3000, function(){console.log("Server started port 3000")});

var mang = ["iOS", "Android", "PHP", "React"];

app.get("/", function(req, res){
    res.render("main");
});

app.get("/es6", function(req, res){
    res.render("es6");
});

app.get("/learn-webpack", function(req, res){
    res.render("learn-webpack");
});

app.get("/note", function(req, res){
    res.render("note");
});

app.post("/get-notes", function(req, res){
    res.send(mang);
});

app.post("/add-note", parser, function(req, res){
    mang.push(req.body.note);
    res.send(mang);
});

app.post("/save-note", parser, function(req, res){
    mang[req.body.id] = req.body.note;
    res.send(mang);
});

app.post("/remove-note", parser, function(req, res){
    var index = mang.indexOf(req.body.note);
    if (index > -1) {
        mang.splice(index, 1);
    }
    res.send(mang);
});

app.get("/try", (req, res) => res.send('Hello axios'));
app.post("/axios", jsonParser, function(req, res){
    res.send(req.body);
});