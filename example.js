var app = require('express')();
app.use(require('./')('Fairy Dust'));
require('http').createServer(app).listen(3000);