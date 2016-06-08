'use strict';

var yoda = require('../controllers/lol.js');
var recent = require('../controllers/recent.js');

module.exports = function(app) {
    app.post('/api/lol', yoda.lolAction);
    app.get('/api/recent', recent.indexAction);
    app.get('/api/recent.json', recent.indexAction);
};