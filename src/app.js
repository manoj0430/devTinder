require("dotenv").config();
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

app.get("/user", async (req, res) => {
  const userEmail = req.body.email;

  try {
    const users = await User.find({ email: userEmail });

    res.send(users);
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});

    res.send(users);
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

app.get("/userId", async (req, res) => {
  const userID = req.body._id;
  try {
    const user = await User.findById(userID);
    console.log(user);
    res.send(user);
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

app.delete("/user", async (req, res) => {
  const userID = req.body._id;
  try {
    await User.findByIdAndDelete(userID);
    res.send("User deleted successfully");
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

//Update user

app.patch("/user", async (req, res) => {
  const userID = req.body._id;
  const data = req.body;
  try {
    await User.findByIdAndUpdate({ _id: userID }, data);
    res.send("User updated successfully");
  } catch (err) {
    res.status(400).send("Something went wrong");
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
