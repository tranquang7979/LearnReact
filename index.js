var express = require("express");
var bodyParser = require("body-parser");
var parser = bodyParser.urlencoded({extended: false});
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(3000);

var mang = ["iOS", "Android", "PHP", "React"];

app.get("/", function(req, res){
    res.render("main");
});

app.get("/note", function(req, res){
    res.render("note");
});

app.post("/get-notes", function(req, res){
    res.send(mang);
});

app.post("/save-note", parser, function(req, res){
    mang.push(req.body.note);
    res.send(mang);
});

app.post("/remove-note", parser, function(req, res){
    var index = mang.indexOf(req.body.note);
    if (index > -1) {
        mang.splice(index, 1);
    }
    res.send(mang);
});