const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID ='645963397923-9ci\\\mu9oe8c8vmk3c295vb.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = 'GOCSPX-H-PGY4TLr8xlvguxWo4';

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:5001/google/callback",
  passReqToCallback: true,
},

function(request, accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
