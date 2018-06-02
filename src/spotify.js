const Spotify = require('spotify-web-api-node');

export const SPOTIFY_CONF = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  REDIRECT_URI: 'http://localhost:6969/callback',
  SCOPES: ['user-read-private', 'user-read-email'],
};

export const STATE_KEY = 'spotify_auth_state';

export const spotifyApi = new Spotify({
  clientId: SPOTIFY_CONF.CLIENT_ID,
  clientSecret: SPOTIFY_CONF.CLIENT_SECRET,
  redirectUri: SPOTIFY_CONF.REDIRECT_URI,
});

export const createPlaylist = (userId, playlistName) =>
  spotifyApi.createPlaylist(userId, playlistName, { public: true });
