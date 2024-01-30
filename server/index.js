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
  
const dotenv = require("dotenv");
dotenv.config()
const connectToMongo=require('./db');
connectToMongo();
const mongoose = require("mongoose");
  
const passport = require('./passport-setup');
const userdb = require("./models/UserSchema.js")
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




app.get("/api/check-login", (req, res) => {
    if (req.isAuthenticated()) {
        // console.log("User login check")
      res.json({ loggedIn: true, user: req.user });
    } else {
        // console.log("User no  login check")

      res.json({ loggedIn: false });
    }
  });


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