const path = require('express').Router();

path.get('/', function(req, res) {
    res.send('I\'m a node API for Garybot.\n');
});

module.exports = path;

const models = require('./myfox');

path.use('/myfox', models);
