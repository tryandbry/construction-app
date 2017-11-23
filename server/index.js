const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const db = require('./db');

app.use(express.static(path.resolve(__dirname,'../dist')));
app.use(express.static(path.resolve(__dirname,'../node_modules/bootstrap/dist/css')));
app.use(express.static(path.resolve(__dirname,'../node_modules/bootstrap/dist/js')));
app.use(express.static(path.resolve(__dirname,'../node_modules/jquery/dist')));
app.use(express.static(path.resolve(__dirname,'../node_modules/popper.js/dist/umd')));

app.use('/api/v1',require('./api/v1'));

app.get('/*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
});

db.on('error', console.error.bind(console, 'db connection error'));
db.on('open',function(){
  app.listen(PORT,function(){
    console.log(`listening on port ${PORT}`);
  });
});

/*
db.onAsync('error')
.then( console.error.bind(console, 'db connection error'))
.catch( console.error.bind(console, 'db connection error, unknown'));

db.onAsync('open')
.then( () => {
  app.listen(PORT,function(){
    console.log(`listening on port ${PORT}`);
  });
})
.catch( console.error.bind(console, 'db connection success, but error'));
*/
