const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
//var models = require('./models');

const { mongoDbUri } = require('../../config/secrets');

mongoose.connect(mongoDbUri, {
  useMongoClient: true,
});

module.exports = mongoose.connection;
