const Spotify = require('spotify-web-api-node');

const SPOTIFY_CONF = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  REDIRECT_URI: 'http://localhost:6969/callback',
  SCOPES: ['user-read-private', 'user-read-email'],
};

const STATE_KEY = 'spotify_auth_state';

const spotifyApi = new Spotify({
  clientId: SPOTIFY_CONF.CLIENT_ID,
  clientSecret: SPOTIFY_CONF.CLIENT_SECRET,
  redirectUri: SPOTIFY_CONF.REDIRECT_URI,
});

module.exports = {
  SPOTIFY_CONF,
  STATE_KEY,
  spotifyApi,
};
