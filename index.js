const { response } = require("express");
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const app = express();
const ejs = require('ejs');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(3000, function() {
    console.log("Server is live.");
});

app.get("/", function(req, res) {
    console.log("You are in app.get()");
    res.render("index");
});

app.post("/", function(req, res) {
    console.log("You are in app.post()");
    res.sendFile(__dirname + "/login.html")
});