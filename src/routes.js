const express = require('express');

const routes = express.Router();

const TweetController = require('./controllers/TweetController');
const LikeController = require('./controllers/LikeController');

routes.get('/tweets', TweetController.find);
routes.post('/tweets', TweetController.create);

routes.post('/likes/:id', LikeController.add);

routes.get('/', (req, res) => {
  return res.send({
    author: 'Édipo Juan',
    descripton: 'Go Week: node, express, mongoose, mlab, sockt.io'
  });
});

module.exports = routes;
