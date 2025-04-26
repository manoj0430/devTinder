const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({ firstName: "Lewis", lastName: "Hamilton" });
});

app.post("/user", (req, res) => {
  res.send("Data successfully posted!!");
});
app.use("/test", (req, res) => {
  res.send("Hello from the test!!");
});

app.use("/", (req, res) => {
  res.send("Hello from the root!!");
});
app.use("/contact", (req, res) => {
  res.send("Hello from the contact!!");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
