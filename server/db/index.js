var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var models = require('./models');

const { mongodb_uri } = require('../../config/secrets');
mongoose.connect(mongodb_uri);
