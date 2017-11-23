const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
//var models = require('./models');

const { mongodb_uri } = require('../../config/secrets');

mongoose.connect(mongodb_uri, {
  useMongoClient: true,
});

module.exports = mongoose.connection;
