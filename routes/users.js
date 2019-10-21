
//////////////////////////////////////////
///   api endpoints for managing users //
////////////////////////////////////////

const router = require("express").Router();     // requires the express router() method
let User = require("../models/user.model");     // requires a custom .js file

// Your Challenge: Make rwo routes. Each will use mongojs methods
// to interact with your mongoDB database, as instructed below.
// You will be using express Router and Mongoose
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/


// 1. get all users on record
// GET: /
// ========================================
router.get("/", async (req, res) => {           // GET method used to fetch all users
  try {
    const users = await User.find();        // Async/Await is used here to give the server time to fetch the required information
    res.send(users);                         // Upon success, send the users
  }
  catch {
    if (error) {                            // Conditional error handling
      throw error,
      res.status(404),                    // Sends a status code of 404, meaning Not Found
      res.send("Users were not found");    // Sends a custom string message
    }
  }
});


// 2. add a new user
// POST /add
// ========================================
router.post("/add", async (req, res) => {                       // POST method to add a new user
  try {
    let user = new User({ username: req.body.username });   // The 'username' will be the input of the user on the actual application.
    user = await user.save();                               // Using the .save() method to save the new 'user'
    res.send(user);                                          // Send the new user
  }
  catch {
    if (error) {
      throw error,
      res.status(400),                                    // Sends a status code of 400, meaning Bad Request
      res.send("User was not added due to a Bad Request"); // Sends a custom string message
    }
  }
});

module.exports = router;        // exports the 'router' module