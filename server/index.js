// Import modules
import express from "express";
import session from "express-session";
import cors from "cors";
import dotenv from "dotenv";
import './config/db.js';
import passport from './config/passport-setup.js';
import isAuthenticated from './middleware/authMiddleware.js';
import multer from "multer";
// import path from 'path';


// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Apply CORS middleware with options
const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true // Allow cookies to be sent with requests,
  
};
app.use(cors(corsOptions));

// Constants from environment variables
const { APP_PORT, CLIENT_URL } = process.env;

// Body parsing middleware
app.use(express.json({ limit: '1gb' }));

// Parse url-encoded request bodies
app.use(express.urlencoded({ limit: '1gb', extended: true }));

// Setup session
app.use(session({
  secret: "iDont545nowtheKey",
  resave: false,
  saveUninitialized: true
}));

// Setup Passport
app.use(passport.initialize());
app.use(passport.session());



// Serve static files
// const __dirname = path.dirname(new URL(import.meta.url).pathname);


// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

import dashbordRutes from './routes/dashbord.routes.js';
import classroomRoutes from './routes/classroom.routes.js';
import upload from "./multer.js";

app.use("/api/dashboard", dashbordRutes);
app.use("/api/classroom", classroomRoutes);

// Route for User Login And registration with Google OAuth
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get("/auth/google/callback", passport.authenticate("google", {
  successRedirect: `${CLIENT_URL}`,
  failureRedirect: `${CLIENT_URL}/login`
}));

// Route to check whether a user is logged in when a page loads
app.get("/api/check-login", (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ loggedIn: true, user: req.user });
  } else {
    res.json({ loggedIn: false });
  }
});

// Route to get user details if authenticated
app.get("/api/user-details", isAuthenticated, function (req, res) {
  res.json({ user: req.user });
});


// Route to logout user if logged in
app.get("/logout", isAuthenticated, (req, res,next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }

    // Assuming a successful logout, send a response to the client
    res.json({ status: "success", message: "Logout successful" });
  });
});

app.post('/api/upload', upload.array('files'), (req, res) => {
  // 'files' should match the name attribute in your form
  res.send('Files uploaded successfully');
});


// Start the server
app.listen(APP_PORT, () => {
  console.log(`Example app listening on port ${APP_PORT}`);
});
