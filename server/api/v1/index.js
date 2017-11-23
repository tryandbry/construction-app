const router = require('express').Router();
const Models = require('../../db/models');

module.exports = router;

router.get('/', function(req,res) {
  console.log('API route hit');

  Models.User.find()
  .then( (data) => {
    console.log("mongo response: ",data);
    return data
  })
  .then( (data) => res.send(data) )
  .catch( console.error );
})
