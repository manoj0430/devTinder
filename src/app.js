const express = require("express");

const app = express();

//Case 1: Middleware function that sends a response with two request handlers
// app.use(
//   "/user",
//   (req, res, next) => {
//     console.log("Response 1 is printed");
//     res.send("Response 1");

//   },
//   (req, res) => {
//     console.log("Response 2 is printed");
//     res.send("Response 2");
//   }
// );

app.use(
  "/user",
  (req, res, next) => {
    console.log("Response 1 is printed");
  },
  (req, res) => {
    console.log("Response 2 is printed");
    res.send("Response 2");
  }
);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
