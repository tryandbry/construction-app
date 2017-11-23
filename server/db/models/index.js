const path = require('path');
const fs = require('fs');

// TODO: use environment variables to point to pathname
const pathname = path.resolve('/home/bryan/projects/construction-app/server/db/models');
//console.log('pathname: ' + pathname);

const getName = (model) => {
  let name = model.split('.')[0];
  name = name[0].toUpperCase() + name.substr(1);
  return name;
}

let models = fs.readdirSync(pathname);
// remove index.js from list of files
// TODO: come up with more robust filename filtering
models = models.filter( (model) => !model.match('index') && !model.match('swp') );

let obj = {};

models.forEach( (model) => {
  let name = getName(model);
  obj[name] = require(`${pathname}/${model}`);
});

module.exports = obj;
