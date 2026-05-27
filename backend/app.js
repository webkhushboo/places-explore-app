// const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Incoming request');
  console.log(req.method, req.url);

  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Success</h1>');
});

server.listen(5001);

// const name = 'Khushboo';

// fs.writeFile('user-data.txt', "Name: " + name, (err) => {
//   if (err) {    
//     console.log(err);
//   } else {
//     console.log('File written successfully');
//   }
// });