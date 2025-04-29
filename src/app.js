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

// app.use("/", (req, res, next) => {
//   console.log("dashboard");
//   //   res.send("hello from dashboard");
//   next();
// });

// app.get(
//   "/users",
//   (req, res, next) => {
//     console.log(" Users");
//     // res.send("Hello from the users");
//     next();
//   },
//   (req, res, next) => {
//     console.log("Users 2");
//     next();
//   },
//   (req, res) => {
//     console.log("Users 3");
//     res.send("Users 3");
//   }
// );
const { authMiddleware, userAuth } = require("./middlewares/auth");
app.use("/admin", authMiddleware);
app.get("/admin/getAllData", (req, res) => {
  res.send("All Data received");
});

app.get("/admin/userData", (req, res) => {
  res.send("User Data received");
});

app.get("/user/data", userAuth, (req, res) => {
  res.send("Hello from the users");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
