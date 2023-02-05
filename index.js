const { response } = require("express");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const ejs = require("ejs");
const nodemailer = require("nodemailer");


const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://admin-vaibhav:Test123@cluster0.jprmrgj.mongodb.net/tpms"
);

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  department: String,
});

// const classSchema= new mongoose.Schema({
//   location: String,
//   capacity: Number,
// });
// const Class=new mongoose.model("Class", classSchema);

const User = new mongoose.model("User", userSchema);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(3000, function () {
  console.log("Server is live.");
});

app.get("/", function (req, res) {
  console.log("You are in app.get()");
  console.log(req.body);
  if (req.query.success == "true") {
    
nodemailer.createTestAccount((err, account) => {
  if (err) {
    console.error("Failed to create a testing account. " + err.message);
    return process.exit(1);
  }

  console.log("Credentials obtained, sending message...");
  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'gladyce.konopelski@ethereal.email',
      pass: 'PhsPQqNNty2VaC1f1Y',
    },
  });

  let message = {
    from: "Sender Name <admintpms@thapar.edu>",
    to: "Recipient <vtiwari1_be21@thapar.edu>",
    subject: "TPMS Admin",
    text: "This is to inforn that your room has been allocated successfully. Here are the details : ",
    html: "<p>This is to inform that your room has been allocated successfully. Here are the details: </p><p>Room No: LT101</p><p>Capacity: 100</p><p>Timing and Duration: 3:20 pm (50 minutes)</p>",
  };
  
  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log("Error occurred. " + err.message);
      return process.exit(1);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
});
    res.render("index", { message: "Confirmation Mail Sent" });
  } else res.render("index", (message = ""));
});

app.get("/confirmation", (req, res) => {
  res.render("confirmation");
});

app.post("/confirmation", (req, res) => {
  res.render("confirmation");
});

app.post("/", function (req, res) {
  console.log("You are in app.post()");
  email = req.body.email;
  password = req.body.password;
  console.log(email, password);
  User.findOne({ email: email }, (err, document) => {
    if (err) {
      console.error(err);
      res.send("An error occurred.");
    } else if (document) {
      console.log(document);
      if (
        document["department"] == "society" &&
        password == document["password"]
      )
        res.redirect(
          `/society?name=${document["name"]}&department=${document["department"]}`
        );
      else if (password == document["password"])
        res.redirect(
          `/teacher?name=${document["name"]}&department=${document["department"]}`
        );
      else res.render("index", { message: "Enter correct Password" });
    } else {
      console.log("No document found.");
      res.render("index", { message: "Email not found" });
    }
  });
});

app.get("/teacher", (req, res) => {
  res.render("teacher", {
    name: req.query.name,
    department: req.query.department,
  });
});
app.post("/teacher", (req, res) => {});

app.get("/society", (req, res) => {
  res.render("society", {
    name: req.query.name,
    department: req.query.department,
  });
});
app.post("/society", (req, res) => {});
