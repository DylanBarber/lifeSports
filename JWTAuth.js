const mongoose = require("mongoose");
const router = require("express").Router();
const jwt = require("jsonwebtoken");

const adminSchema = new mongoose.Schema({ name: "string", size: "string" });
const Admin = new mongoose.model("admins", adminSchema);

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
    jwt.verify(req.token, process.env.JWT_KEY, (err) => {
      if (err) return res.sendStatus(403);
      next();
    });
  } else {
    //Forbidden
    res.sendStatus(403);
  }
};

router.post("/posts", verifyToken, (req, res) => {
    res.json({
      message: "Post created",
    });
});

router.post("/login", async (req, res) => {
  let adminFound = false;
  let adminData = {};
  await Admin.find({ username: req.body.username, password: req.body.password }, (err, data) => {
    if (data.length !== 0) {
      adminFound = true;
      adminData = { data };
    } else {
      res.json({adminFound});
    }
    if (adminFound === true) {
      jwt.sign({ adminData }, process.env.JWT_KEY, (err, token) => {
        return res.json({ token });
      });
    };
  });
});

module.exports = {router, verifyToken};