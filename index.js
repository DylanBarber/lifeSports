
////////////////////////////////
////     Road to Hire      ////
///     LifeSports App     ///
/////////////////////////////
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;
let uri = "";

// register middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Serve up static assets (heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  uri = process.env.ATLAS_URI;  // connection string for Atlas here  
} else {
  uri = "mongodb://localhost/challenge";  // connection string for localhost mongo here  
}

// connection to database
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  dbName: "lifeSports"
}
);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection is live");
});

// register api catalogue
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

//TESTING
const adminSchema = new mongoose.Schema({ name: "string", size: "string" });
const Admin = new mongoose.model("admins", adminSchema);

app.get("/test", (req, res) => {
  res.json({
    message: "Welcome"
  });
});

const verifyToken = (req, res, next) => {
  //Grab bearer from header
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    //Split bearer
    const bearer = bearerHeader.split(" ");
    //Grab just the token from the array
    const bearerToken = bearer[1];
    //Set the request token as the extracted token
    req.token = bearerToken;
    next();
  } else {
    //Forbidden
    res.sendStatus(403);
  }
};

app.post("/api/posts", verifyToken, (req, res) => {
  jwt.verify(req.token, process.env.JWT_KEY, (err, authData) => {
    if (err) return res.sendStatus(403);
    res.json({
      message: "Post created",
      authData
    });
  });
});

app.post("/api/login", (req, res) => {
  let adminFound = false;
  let adminData = {};
  console.log(req.body);
  Admin.find({ username: req.body.username, password: req.body.password }, (err, data) => {
    console.log(data);
    if (err) return console.log(err);
    if (data.length !== 0) {
      console.log(2);
      adminFound = true;
      adminData = { data };
      console.log(data);
    } else {
      res.json({adminFound});
    }
    if (adminFound === true) {
      console.log(3);
      jwt.sign({ adminData }, process.env.JWT_KEY, (err, token) => {
        console.log(4);
        return res.json({ token });
      });
    };
  });

  // res.end(); 

});


//TESTING

// Creating live connection to reactjs app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});