var express = require("express");
var bodyParser = require("body-parser");
var parser = bodyParser.urlencoded({extended: false});
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

//Webpack https://www.youtube.com/watch?v=IHKv4ZJdhlU&list=PLzrVYRai0riRTQ-w233MaRwcbxkNeciQY&index=2
//Redux https://www.youtube.com/watch?v=zcpyOwPdIYg&list=PLzrVYRai0riQFEN586LOz3eMv2Rgy6WXS

//“Please try running this command again as Root/Administrator” error
//sudo chown -R $USER /usr/local

//--install react & react-dom
//npm install react react-dom --save

//-- install webpack to global
//npm install -g webpack
//-- compile files
//webpack <entry> [<entry>] --output [-o] <output>
//=> ex: webpack ./app/app.js --output ./public/bundle.js
//-- auto update bundle when files change
//webpack -w 

//-- install libraries of BABEL
//npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev
//npm install webpack --save




