const authMiddleware = (req, res, next) => {
  const token = "xyz";
  const isAuthenticated = token === "xyz";
  console.log("Authentication");
  if (!isAuthenticated) {
    res.status(401).send("Unauthorized access");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  const token = "xyzss";
  const isAuthenticated = token === "xyz";
  console.log("Authentication");
  if (!isAuthenticated) {
    res.status(401).send("Unauthorized access");
  } else {
    next();
  }
};

module.exports = {
  authMiddleware,
  userAuth,
};
