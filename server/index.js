const express = require("express");
const app = express();
const session = require("express-session");
const cors = require("cors");
// Apply CORS middleware with options
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true  // Allow cookies to be sent with requests
};
app.use(cors(corsOptions));
  
require("dotenv").config();
require('./config/db');
const mongoose = require("mongoose");
  
const passport = require('./config/passport-setup');

const {APP_PORT,CLIENT_URL} = process.env;
const isAuthenticated = require('./middleware/authMiddleware'); // Import the middleware

app.use(express.urlencoded({ extended: true }));

// setup session
app.use(session({
    secret:"iDont545nowtheKey",
    resave:false,
    saveUninitialized:true
}))


// setuppassport
app.use(passport.initialize());
app.use(passport.session());



//Route 1 : For User Login And registration
app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}));

app.get("/auth/google/callback",passport.authenticate("google",{
    successRedirect:`${CLIENT_URL}`,
    failureRedirect:`${CLIENT_URL}/login`
}))



//Route 2 : To check whether a user is logged in when a page loads 
app.get("/api/check-login", (req, res) => {
    if (req.isAuthenticated()) {
      res.json({ loggedIn: true, user: req.user });
    } else {
      res.json({ loggedIn: false });
    }
  });

//Route 3 : To Logout user if  user is logged 
app.get("/logout", isAuthenticated, (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }

        // Assuming a successful logout, send a response to the client
        res.json({ status: "success", message: "Logout successful" });
    });
});
app.listen(APP_PORT, () => {
  console.log(`Example app listening on port ${APP_PORT}`)
})