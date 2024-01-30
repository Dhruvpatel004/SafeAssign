// passport-setup.js
const {CLIENT_ID,CLIENT_SECRET} = process.env;
const passport = require("passport");
  
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const userdb = require("../models/UserSchema.js")


passport.use(
    new OAuth2Strategy({
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
        scope: ["profile", "email"]
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
            let user = await userdb.findOne({ googleId: profile.id });

            if (!user) {
                user = new userdb({
                    googleId: profile.id,
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    image: profile.photos[0].value
                });

                await user.save();
            }
            return done(null, user);
        } catch (error) {
            return done(error, null);
        }
    }
));

passport.serializeUser((user,done)=>{
    done(null,user);
})

passport.deserializeUser((user,done)=>{
    done(null,user);
});

module.exports = passport;
