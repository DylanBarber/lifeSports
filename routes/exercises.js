
/////////////////////////////////////////////
//// API endpoints for managing exercises //
///////////////////////////////////////////

const router = require("express").Router();             // Requires the express Router() method
const Exercise = require("../models/exercise.model");     // Requires a custom .js file
const verifyToken = require("../JWTAuth").verifyToken;


// Your Challenge: Make five routes. Each will use mongojs methods
// to interact with your mongoDB database, as instructed below.
// You will be using express Router and Mongoose
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// 1. get all exercise logs on record
// GET: /
// ========================================
router.get("/", async (req, res) => {                       // GET method used to fetch all exercises
  try {
    const exercise = await Exercise.find().sort({date: "desc"});   // Async/Await is used here to give the server time to fetch the info
    res.send(exercise);                                 // Upon success, send exercises
  }
  catch {
    if (error) {                                        // Conditional error handling
      throw error,
      res.status(404),                                // Sends a status code of 404, meaning Not Found
      res.send("Exercise Routines were not found");    // Sends a custom string message
    }
  }
});

// 2. add a new exercise log
// POST: /add
// ========================================
router.post("/add", verifyToken, async (req, res) => {               // POST method to add a new user
  try {
    let exercise = new Exercise({
      username: req.body.username,      // The 'username, description, duration, and date' will be the input of the user on the application.
      description: req.body.description,
      duration: req.body.duration,
      date: req.body.date
    });
    exercise = await exercise.save();               // Using the .save() method to save the new 'exercise'
    res.send(exercise);                              // Send the new exercise
  }
  catch {
    if (error) {
      throw error,
      res.status(400),                           // Sends a status code of 400, meaning Bad Request
      res.send("Exercise Routing was not added due to a Bad Request");     // Sends a custom string message
    }
  }

});

// 3. retrieve a specfic exercise log
// GET: /:id
// ========================================
router.get("/:id", async (req, res) => {                            // GET method to find exercise by 'id'
  try {
    const exercise = await Exercise.findById(req.params.id);     // 'req.params.id' is used to take the user input for 'id'
    res.send(exercise);                                          // Send the requested exercise
  }
  catch (error) {
    if (error) {
      throw error,
      res.status(404),                                        // Send a status code of 404, meaning Not Found
      res.send("Exercise Routine was not found");              // Send a custom string message
    }
  }
});


// 4. delete a specfic exercise log
// DELETE: /:id
// ========================================
router.delete("/:id", verifyToken, async (req, res) => {     // DELETE method used to find exercise by 'id' and delete
  try {
    const exercise = await Exercise.findByIdAndDelete(req.params.id);    // using the findByIdAndDelete method to find the requested exercise and delete it
    res.send(exercise);                      // Send the result
  }
  catch {
    if (error) {
      throw error,
      res.status(404),                             // Send a status code of 404, meaning Not Found
      res.send("Exercise Routine was not found");  // Send a custom string method
    }
  }
});


// 5. retrieve a specific exercise log and update it 
// with information sent by client on req body
// POST: /update/:id
// ========================================
router.post("/update/:id", verifyToken, async (req, res) => {        // POST method used to find exercise by 'id' and update
  try {
    let exercise = await Exercise.updateOne(        // Using the updateOne method to update ONLY one exercise
      {
        _id: req.params.id                      // 'id' will be the user input
      },
      {
        $set: {                                 // Using the 'set' method to select which properties to update
          username: req.body.username,        // 'username, description, duration, and date' will update depending on user input
          description: req.body.description,
          duration: req.body.duration,
          date: req.body.date
        }
      }
    );
    res.send(exercise);                              // Send the result
  }
  catch {
    if (error) {
      throw error,
      res.status(404),                            // Send a status code of 404, meaning Not Found
      res.send("Exercise Routine was not found");  // Send a custom string message
    }
  }
});

// 6. Purpose: send back the requested results with the same name
// GET: /find/:username
// ========================================
router.get("/find/:username", async (req, res) => {                            // GET method to find exercise by 'id'
  try {
    const exercise = await Exercise.find({ username: req.params.username }).sort({date: "descending"});
    res.send(exercise);                                          // Send the requested exercise
  }
  catch {
      res.status(404),                                        // Send a status code of 404, meaning Not Found
      res.send("Exercise Routine was not found");              // Send a custom string message
  }
});

// export router module
module.exports = router;        // export the 'router' module

// Code below is not currently used

// 6. Purpose: send back the requested results with the same date
// GET: /find/:date
// ========================================
// router.get("/date/:date", async (req, res) => {                            // GET method to find exercise by 'id'
//   try {
//     const exercise = await Exercise.find({ date: req.params.date });
//     res.send(exercise);                                          // Send the requested exercise
//   }
//   catch {
//       res.status(404),                                        // Send a status code of 404, meaning Not Found
//       res.send("Exercise Routine was not found");              // Send a custom string message
//   }
// });