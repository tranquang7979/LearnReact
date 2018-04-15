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

////------------> 2.7
//Redux https://www.youtube.com/watch?v=zcpyOwPdIYg&list=PLzrVYRai0riQFEN586LOz3eMv2Rgy6WXS

//“Please try running this command again as Root/Administrator” error
//sudo chown -R $USER /usr/local

//--install libraries of REACTJS (react & react-dom)
//npm install react react-dom --save

//-- install WEBPACK library to global
//npm install -g webpack
//-- compile files
//webpack <entry> [<entry>] --output [-o] <output>
//=> ex: webpack ./app/app.js --output ./public/bundle.js
//-- auto update bundle when files change
//webpack -w 

//-- install libraries of BABEL
//npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev
//npm install webpack --save

//-- VSTS VSCode
/*
    The Team Services extension for Visual Studio Code now supports Team Foundation Server 2015 Update 2 and later
    https://blogs.msdn.microsoft.com/devops/2016/07/11/the-team-services-extension-for-visual-studio-code-now-supports-team-foundation-server-2015-update-2-and-later/
    
    TEE-CLC plugin
    https://github.com/Microsoft/team-explorer-everywhere/releases

    Set up and Configure the TEE CLC on Linux
    https://www.youtube.com/watch?v=VPNaEIVZfr0&feature=youtu.be

    Set up the Team Services extension for Visual Studio Code
    https://www.youtube.com/watch?v=t6gGfj8WOgg&feature=youtu.be

    Walkthrough of TFS 2015 support in Team Services extension for Visual Studio Code
    https://www.youtube.com/watch?v=CLTA7paAjAs
*/

/*
npm install babel-preset-stage-0 --save-dev
operator (3 dot) ...
//-- START operator (3 dot) ...
//-- EX1:
var obj = { name: 'Steven', age: 35 }

var obj2 = {...obj, age: 34, height: 180};

obj.age = 30;
console.log(obj2);

//-- EX2:
var mang = [1, 2, 3, 5];
var arr = [7, 6, ...mang, 9, 10];
mang[0] = 1000;
console.log('Array: ', arr);
console.log('Mang: ', mang);
//-- END operator (3 dot) ...

//-- START pure function
//* NO SIDE EFFECT
//* NO ASYNC TASK
//* 1 input => 1 output
var add = (a, b) => a + b;
console.log(add(5, 6));
//-- END pure function
*/

//-- REDUX
//npm install redux --save-dev
//npm install react-redux --save-dev