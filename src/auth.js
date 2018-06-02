const express = require('express');

const router = new express.Router();
const { SPOTIFY_CONF, STATE_KEY, spotifyApi } = require('./spotify');

const generateRandomString = N => (Math.random().toString(36) + Array(N).join('0')).slice(2, N + 2);

router.get('/login', (_, res) => {
  const state = generateRandomString(16);
  res.cookie(STATE_KEY, state);
  res.json({ redirectLink: spotifyApi.createAuthorizeURL(SPOTIFY_CONF.SCOPES, state) });
});

router.get('/callback', (req, res) => {
  const { code, state } = req.query;
  const stored = req.cookies ? req.cookies[STATE_KEY] : null;

  if (!state || state !== stored) {
    res.json({ error: 'Invalid state mismatch.' }).send(500);
  } else {
    res.clearCookie(STATE_KEY);

    spotifyApi
      .authorizationCodeGrant(code)
      .then((data) => {
        const accessToken = data.body.access_token;
        const refreshToken = data.body.refresh_token;

        spotifyApi.setAccessToken(accessToken);
        spotifyApi.setRefreshToken(refreshToken);

        console.log('got access token');
        res.redirect(`http://localhost:3000/login/${accessToken}/${refreshToken}`);
      })
      .catch((e) => {
        res.redirect(`http://localhost:3000/error/${e.message}`);
      });
  }
});

module.exports = router;
