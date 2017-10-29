const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname,'../dist')));
app.use(express.static(path.resolve(__dirname,'../node_modules/bootstrap/dist/css')));
app.use(express.static(path.resolve(__dirname,'../node_modules/bootstrap/dist/js')));
app.use(express.static(path.resolve(__dirname,'../node_modules/jquery/dist')));
app.use(express.static(path.resolve(__dirname,'../node_modules/popper.js/dist/umd')));

app.get('/*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
});


app.listen(PORT,function(){
  console.log(`listening on port ${PORT}`);
});
