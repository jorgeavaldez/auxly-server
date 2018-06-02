const express = require('express');

const router = new express.Router();

const { spotifyApi } = require('./spotify');

router.get('/user', (req, res) => {
  spotifyApi.getMe().then(({ body }) => {
    res.json(body).send(200);
  });
});

module.exports = router;
