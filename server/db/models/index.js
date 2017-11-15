const path = require('path');
const fs = require('fs');

const pathname = path.resolve('.');

let models = fs.readdirSync(pathname);
// remove index.js from list of files
models.splice(models.indexOf('index.js'),1);

let obj = {};

models.forEach( (model) => {
  let name = model.split('.')[0];
  obj[name] = require(`${pathname}/${model}`);
});

console.log(obj);

module.exports = obj;
