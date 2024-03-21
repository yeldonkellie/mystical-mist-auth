// mystical-mist-auth.js

const jwt = require('jsonwebtoken');

// Sample user database (Replace this with your actual user data source)
const users = [];

// Secret key for JWT signing (Replace this with your actual secret key)
const secretKey = 'your-secret-key';

// Middleware to authenticate JWT tokens
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Register a new user
const registerUser = (username, password) => {
  const user = { username, password };
  users.push(user);
};

// Authenticate user credentials and generate JWT token
const loginUser = (username, password) => {
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return null;

  const accessToken = jwt.sign({ username: user.username }, secretKey);
  return accessToken;
};

// Example protected route
const protectedRouteHandler = (req, res) => {
  res.json({ message: `Welcome, ${req.user.username}! This is a protected route.` });
};

module.exports = {
  authenticateToken,
  registerUser,
  loginUser,
  protectedRouteHandler
};
