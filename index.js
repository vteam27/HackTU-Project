const { response } = require("express");
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const app = express();
const ejs = require('ejs');


const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin-vaibhav:Test123@cluster0.jprmrgj.mongodb.net/tpms");

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    department: String,
});

const User = new mongoose.model("User", userSchema);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(3000, function() {
    console.log("Server is live.");
});

app.get("/", function(req, res) {
    console.log("You are in app.get()");
    res.render("index", message="");
});

app.get('/confirmation', (req, res)=>{
    res.render('confirmation')
})

app.post("/", function(req, res) {
    console.log("You are in app.post()");
    res.sendFile(__dirname + "/login.html")
});

app.get("/login", (req, res)=>{
res.render("teacher",{name: "Vaibhav", department: "DOSA"});
});
app.post("/login",(req, res)=>
{
email=req.body.email;
password=req.body.password;
console.log(email, password);

User.findOne({ email: email }, (err, document) => {
    if (err) {
      console.error(err);
      res.send("An error occurred.");
    } else if (document) {
      console.log(document);
      if(password==document["password"])
      res.render("teacher", {name:document["name"],department:document["department"]});
      else
      res.render("index", {message: "Enter correct Password"});
    } else {
      console.log("No document found.");
      res.render("index", {message: "Email not found"});
    }
  });
});