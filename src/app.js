const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json()); // Middleware to parse JSON request body
app.post("/signup", async (req, res) => {
  // console.log(req.body);
  // we have created new instance of User model
  const user = new User(req.body);

  try {
    await user.save();

    res.send("User created Successfully");
  } catch (err) {
    res.status(401).send("Error creating user", err);
  }
});

connectDB()
  .then(() => {
    console.log("Successfully connected to the database");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Error connecting to the database", err);
  });
