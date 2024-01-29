const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true  // Allow cookies to be sent with requests
  };
  
  // Apply CORS middleware with options
  app.use(cors(corsOptions));
const dotenv = require("dotenv");
dotenv.config();
const {APP_PORT,clientid,clientsecret} = process.env;
const connectToMongo=require('./db');
connectToMongo();
const mongoose = require("mongoose");


const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const userdb = require("./models/UserSchema.js")

app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret:"iDont545nowtheKey",
    resave:false,
    saveUninitialized:true
}))


// setuppassport
app.use(passport.initialize());
app.use(passport.session());





//available routes
// app.use('/api/auth',require('./routes/auth/index'))
// app.use('/api/notes',require('./routes/notes'))




// setup session

passport.use(
    new OAuth2Strategy({
        clientID:clientid,
        clientSecret:clientsecret,
        callbackURL:"/auth/google/callback",
        scope:["profile","email"]
    },
    async(accessToken,refreshToken,profile,done,)=>{
        try {
            let user = await userdb.findOne({googleId:profile.id});

            if(!user){
                user = new userdb({
                    googleId:profile.id,
                    name:profile.displayName,
                    email:profile.emails[0].value,
                    image:profile.photos[0].value
                });

                await user.save();
            }

            // const token = jwt.sign({ userId: user._id,userName:user.name,userEmail:user.email}, "vvbzbakbkjavjkkaakjfw");
            // const expirationDate = new Date(Date.now() + 24 * 60 * 60 * 1000);

            // res.cookie("jwtToken", token, { httpOnly: true , expires: expirationDate,});

            return done(null,user)
        } catch (error) {
            return done(error,null)
        }
    }
    )
)

passport.serializeUser((user,done)=>{
    done(null,user);
})

passport.deserializeUser((user,done)=>{
    done(null,user);
});

app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}));

app.get("/auth/google/callback",passport.authenticate("google",{
    successRedirect:"http://localhost:5173/dashboard",
    failureRedirect:"http://localhost:5173/login"
}))

// app.get("/login/sucess",async(req,res)=>{

//     if(req.user){
//         res.status(200).json({message:"user Login",user:req.user})
//     }else{
//         res.status(400).json({message:"Not Authorized"})
//     }
// })

const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.status(401).json({ status: "error", message: "User not authenticated" });
    }
};
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