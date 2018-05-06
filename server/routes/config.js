const route = require('express')();
const bodyParser = require('body-parser')
const bodyParserError = require('../utils/bodyParserError');

route.use((req, res, next) => {
     let headers = 'X-Requested-With,content-type,x-auth'
     res.setHeader('Access-Control-Allow-Origin', '*');
     res.setHeader('Access-Control-Allow-Headers', headers);
     res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE')
     next();
})

route.use(bodyParser.json());
route.use(bodyParserError);

module.exports = route
