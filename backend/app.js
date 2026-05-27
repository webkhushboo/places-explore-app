const express = require('express');

const app = express();

app.use((req, res, next) => {
  let body = '';
  req.on('end', () => {
    const userName = body.split('=');
    req.body = { name: userName}
    next();
  
  });
});

app.use((req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});


app.listen(5001);