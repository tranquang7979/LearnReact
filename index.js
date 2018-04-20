var express = require("express");
var bodyParser = require("body-parser");
var parser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json();
var app = express();
var session = require('express-session');

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(session({
    secret: '123',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000*60*60*24 }
  }))
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

app.post("/signIn", jsonParser, function(req, res){
    var {username, password} = req.body;
    if(username === 'Steven' && password === '1'){
        req.session.username = username;
        return res.send('Login success');
    }
    res.send('Login fail');
});
app.get("/getInfo", (req, res) => {
    if(req.session.username){
        return res.send(req.session.username);
    }
    return res.send('LOGIN_FIRST');
});
app.post("/signOut", jsonParser, function(req, res){
    req.session.username = undefined;
    return res.send('LOG_OUT');
});