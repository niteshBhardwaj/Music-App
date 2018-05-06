const express = require('express');
const routes = express();
const path = require('path');

routes.use(express.static(path.resolve(__dirname, '../../build')));
routes.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../build', 'index.html'));
});

module.exports = routes;
