import express from 'express';
import { spotifyApi, createPlaylist } from './spotify';

const router = new express.Router();

const catchHandler = res => (message = 'Error with Spotify API') => err =>
  res.json({
    error: message,
    details: {
      message: err.message,
      stacktrace: err.stack,
    },
  });

router.get('/user', (req, res) =>
  spotifyApi
    .getMe()
    .then(({ body }) => res.json(body).send(200))
    .catch(catchHandler(res)()));

router.post('/playlist', (req, res) =>
  createPlaylist(req.body.id, 'test playlist')
    .then(data => res.status(200).json(data))
    .catch(catchHandler(res)()));

module.exports = router;
