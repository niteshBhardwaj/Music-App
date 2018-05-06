const express = require('express');
const config = require('./config');
const route = express();
const albumController = require('../controllers/albumController');

route.use(config);
route.get('/albums', albumController.getAll);
route.get('/songsByAlbum/:id', albumController.songList);

route.use('*', function(req, res) {
    res.status(404).json({error: 'Route not found', status: false})
})

module.exports = route;
