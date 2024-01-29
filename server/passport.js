const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.use(
	new GoogleStrategy(
		{
			clientID: "676725411899-92v3gpdc7kgv15mpfdmksaholvgi13jf.apps.googleusercontent.com",
			clientSecret: "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",
			callbackURL: "/auth/google/callback",
			scope: ["profile", "email"],
		},
		function (accessToken, refreshToken, profile, callback) {
			callback(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});