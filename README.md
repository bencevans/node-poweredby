# poweredby

[![Build Status](https://travis-ci.org/bencevans/node-poweredby.svg?branch=master)](https://travis-ci.org/bencevans/node-poweredby)

### Add a X-Powered-By Header:

```js
app.use(require('poweredby')('YOUR POWERED BY HEADER'))
=>  X-Powered-By: Fairy Dust
```

### Remove X-Powered-By Header:

```
app.use(require('poweredby')(false))
=>
```

### Mini Example:


```js
var app = require('express')();
app.use(require('poweredby')('Fairy Dust'));
require('http').createServer(app).listen(3000);
```

```
➜ curl --head http://localhost:3000
HTTP/1.1 404 Not Found
X-Powered-By: Fairy Dust
Content-Type: text/html
Date: Tue, 25 Mar 2014 01:23:10 GMT
Connection: keep-alive
```

